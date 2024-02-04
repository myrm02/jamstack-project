<script lang="ts" setup>

const search = useSearchStore()

</script>

<template>
  <nav class="pt-2">
      <div class="flex justify-between items-center w-full ml-3">
        <div class="flex items-center gap-x-5">
          <NuxtLink to="/" class="flex items-center no-underline gap-x-5 text-pink">
            <img alt="" aria-hidden="true" class="h-16" src="/public/logo.png" />
            <h1 name="websiteTitle">EF-Art Crossover</h1>
          </NuxtLink>
          <ul class="flex list-none text-pink-500 text-xl font-bold gap-x-10" >
            <li class="hover:text-[#F4C752] cursor-pointer" id="navLinks">Articles</li>
            <li class="hover:text-[#F4C752] cursor-pointer" id="navLinks">Projects</li>
            <li class="hover:text-[#F4C752] cursor-pointer" id="navLinks">Ideas</li>
            <li class="hover:text-[#F4C752] cursor-pointer" id="navLinks">Shop</li>
          </ul>
        </div>
        <div class="flex w-1/4">
          <input
            id="search" v-model="search.query"
            class="px-4 py-2 w-[255px] border-2 border-solid rounded-[18px] border-[#FFDD85] drop-shadow-none text-base font-medium focus:outline-none focus:border-[#FFDD85]"
            type="search"
          >
        </div>
      </div>
      <hr>
  </nav>
</template>
