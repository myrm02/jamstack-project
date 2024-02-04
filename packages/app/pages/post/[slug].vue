<script lang="ts" setup>
import type { PostData } from '~/models/recipes.model'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: recipe, pending } = useAsyncData(
  'recipe',
  () => findOne<PostData>(`posts/${route.params.slug}`),
)

computed :{
  console.log(recipe)
}

</script>

<template>
  <div class="container">
    <template v-if="pending">
      <div class="flex justify-center mt-47">
        <Loading />
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center gap-x-14">
        <div class="flex flex-col w-[857px] mt-3">
          <div class="flex flex-col gap-y-3">
            <NuxtLink :to="`/`" class="flex flex-col no-underline text-black">
              <div class="flex flex-row gap-x-3 items-center">
                <img aria-hidden="true" src="/public/return-arrow.png" alt="return button icon">
                <span class="text-pink-300 font-semibold" name="returnLabel">Retourner à la galerie</span>
              </div>
            </NuxtLink>
          <NuxtImg
            :src="recipe.data.image.url" alt="Artist post" aria-hidden="true"
            class="w-full h-[433px] object-contain object-center bg-white"
          />
          <div class="flex relative justify-between">
            <div class="grid grid-cols-3 text-sm/[12px]">
              <span v-for="tag in recipe.data.etiquettes" :key="tag.id" class="py-1 px-2">
                #{{ tag.name }}
              </span>
            </div>
            <Likes class="absolute top-0 right-0 mr-6"/>
          </div>
         </div> 
          <UserInfos :recipe="recipe.data" class="my-6"/>
          <p>{{ recipe.data.description }}</p>
          <p>Ce post a reçu {{ recipe.data.likes_number }} j'aimes. Tous les oeuvres de ce site sont soumis au droit d'auteur.</p>
        </div>
        <div class="flex flex-col w-[297px] mt-18">
          <div class="flex flex-col w-full gap-y-6">
            <div
              class="h-[433px] rounded-[10px] w-full bg-[#FFDD85]"
            >
              <div class="mx-8 mt-8">
                <CommentBlock v-for="comment in recipe.data.comments" :key="comment.id" :comment="comment"/>
              </div>
            </div>
            <div>
              <CommentInput/>
            </div>
          </div>
          <div class="flex flex-col m-auto md:flex-row">
            <div class="flex flex-col w-full md:w-1/4">
              <div class="flex flex-col gap-y-3">
                <MakeReviewButton />
                <AddToCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
