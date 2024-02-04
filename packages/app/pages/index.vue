<script lang="ts" setup>
import type { ITag } from '~/models/recipes.model'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: ITag[] }>('tags'),
)

function addTag(tag: string) {
  if (!search.queryTags.includes(tag))
    search.queryTags.push(tag)
  else search.queryTags = search.queryTags.filter(t => t !== tag)
}

</script>

<template>
  <div class="container">
      <div v-if="search.pending && search.sortedByTags" class="flex justify-center mt-47">
        <Loading />
      </div>
      <div v-if="!search.pending && search.sortedByTags" class="flex flex-col mt-8"> <!--Section pour le contenu de la page en entier-->
        <div class="flex flex-col lg:flex-row gap-x-3"> <!--Section pour séparer les deux blocs-->
          <aside class="flex flex-col ml-17"> <!--Section des catégories-->
            <div class="form-group flex flex-col">
                  
                  <div class="flex flex-col w-full gap-y-2" role="group">
                    <button
                      title="Arts"
                      id="categoriesLabel"
                      class="w-[296px] h-[41px] py-1 px-2 bg-[#FF82EC] text-white text-lg font-semibold border-none rounded-[7px] cursor-pointer hover:w-[290px]"
                    >
                      Arts
                    </button>
                    <button
                      title="Vidéos"
                      id="categoriesLabel"
                      class="w-[296px] h-[41px] py-1 px-2 bg-[#FF82EC] text-white text-lg font-semibold border-none rounded-[7px] cursor-pointer hover:w-[290px]"
                    >
                      Vidéos
                    </button>
                    <button
                      title="Mixtape"
                      id="categoriesLabel"
                      class="w-[296px] h-[41px] py-1 px-2 bg-[#FF82EC] text-white text-lg font-semibold border-none rounded-[7px] cursor-pointer hover:w-[290px]"
                    >
                      Mixtape
                    </button>
                  </div>
                  
            </div>
          </aside>
          <client-only> <!--Section des publications et tags-->
            <div class="flex flex-col gap-y-2"> <!--Section pour séparer publications et tags-->
              <div class="flex mx-24 hover:cursor-pointer" @click="search.resetTags">
                <img aria-hidden="true" class="rounded-full w-[38.86px] h-[38.86px]" src="/public/reset-button.png" alt="restart">
              </div>
              <div class="grid grid-cols-4 gap-2 w- ml-16" role="group"> <!--Section pour les tags-->
                <button
                  v-for="tag in tags?.data" :key="tag.id"
                  :class="{ 'bg-gray-900 text-white': search.queryTags.includes(tag.slug) }"
                  :title="tag.name"
                  id="tagsLabel"
                  class="w-[118px] h-[33px] justify-center items-center rounded-[17px] py-1 px-2 bg-[#FCAFFF] text-white text-sm font-medium border-none cursor-pointer hover:bg-[#FC98FF]"
                  @click="addTag(tag.slug)"
                >
                  {{ tag.name }}
                </button>
              </div>
              <div> <!--Section des publications-->
              <ul
                v-if="search.sortedByTags.length"
                class="grid list-none lg:grid-cols-4 gap-2 sm:grid-cols-4 gap-2"
              >
  
                <NuxtLink v-for="recipe in search.sortedByTags" :key="recipe.id" :to="`/post/${recipe.slug}`" class="no-underline text-black">
                  <NuxtImg :src="recipe.image.url" alt="A post" class="w-[265.46px] h-[202px] object-cover"></NuxtImg>
                  <p id="artTitle">{{ recipe.title }}</p>
                </NuxtLink>
  
              </ul>
            </div>
            </div>
          </client-only>
        </div>
      </div>
  </div>
</template>
