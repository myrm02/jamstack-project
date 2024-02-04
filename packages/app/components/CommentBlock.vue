<script lang="ts" setup>
import type { IComment, IRecipe } from '../models/recipes.model'

defineProps({
  comment: {
    type: Object as PropType<IComment>,
    required: true,
  },
})
</script>

<template>
  <div class="flex gap-x-9">
    <div class="flex flex-col">
      <NuxtImg aria-hidden="true" class="rounded-full w-[38.86px] h-[38.86px]" :src="`${comment.profil.image.url}`" alt="userprofil"/>
    </div>
    <div class="flex flex-col place-content-center mt-1">
      <span class="font-semibold text-sm/[13px]">{{ comment.profil.username }}</span>
      <span class="text-sm/[13px] mt-1">{{ comment.content }}</span>
      <div class="flex mt-2.5 text-sm/[11px] font-light text-gray-600">
        <span>{{ comment.agree_numbers }} agree</span>
      </div>
    </div>
  </div>
</template>
