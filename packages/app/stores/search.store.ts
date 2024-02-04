import Fuse from 'fuse.js'
import type { IPost, ITag, PostsData } from '~/models/posts.model'

export const useSearchStore = defineStore('search', () => {
  const { find } = useStrapi4()

  const { data: recipes, pending } = useAsyncData('posts', () => find<PostsData>('posts', { populate: '*' }))
  const query = ref('')
  const queryTags = ref<string[]>([])
  const elements = reactive<IPost[]>(recipes.value?.data || [])
  const keys = ['title', 'tags.name', 'tags.slug']

  const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.3,
  }))

  const sortedElements = computed(() => {
    return elements.sort((a, b) => {
      return a.createdAt > b.createdAt ? -1 : 1
    })
  })

  const results = computed(() => {
    if (!query.value)
      return Array.from(sortedElements.value)
    return [...fuse.value.search(query.value).map(r => r.item)]
  })

  const sortedByTags = computed(() => {
    if (!queryTags.value.length)
      return results.value
    return results.value.filter((recipes) => {
      return recipes.etiquettes.some((tag: ITag) => queryTags.value.includes(tag.slug))
    })
  })

  const resetTags = () => queryTags.value = []

  return { query, results, elements, pending, sortedByTags, queryTags, resetTags }
})
