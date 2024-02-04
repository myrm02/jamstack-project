<script lang="ts" setup>
import type { IRecipe } from '../models/recipes.model'

defineProps({
  recipe: {
    type: Object as PropType<IRecipe>,
    required: true,
  },
})
</script>

<template>
  <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-x-5 ml-9">
            <div class="rounded-full">
                <img aria-hidden="true" class="rounded-full w-[50px] h-[50px]" :src="`${ recipe.profil.image.url }`" alt="">
            </div>
            <div class="flex flex-col">
                <span class="font-semibold">{{ recipe.title }}</span>
                <span>by {{ recipe.profil.username }}</span>
            </div>
        </div>
        <div class="flex mr-20 text-sm/[24px] text-gray-600">
            <p>{{ recipe.dateOfPublication }}</p>
        </div>
    </div>
</template>