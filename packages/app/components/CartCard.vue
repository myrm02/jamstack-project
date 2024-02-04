<script lang="ts" setup>
import type { IPost } from '../models/recipes.model'

defineProps({
  recipe: {
    type: Object as PropType<IPost>,
    required: true,
  },
})
</script>

<template>
    <li class="flex flex-col w-[255px] h-[332px] gap-y-4 p-4 border-2 border-black border-solid">
    <div class="grid justify-items-stretch mr-9"><span class="justify-self-end">Remove</span></div>
    <div class="mx-auto">
      <NuxtImg :src="recipe.image.url" alt="" class="w-[216.46px] h-[153px] object-cover"/>
    <h2 class="text-center">
      {{ recipe.title }}
    </h2>
    <div class="flex justify-between">
      <p>
        {{ recipe.description }}
      </p>
      <p>
        00,0 €
      </p>
    </div>
    <NuxtLink :to="`/recettes/${recipe.slug}`" prefetch>
      Voir la recette
    </NuxtLink>
    </div>
  </li>
</template>