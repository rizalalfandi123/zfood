<template>
  <section class="space-y-2">
    <h1 class="text-2xl font-medium tracking-wide">Browse by Name</h1>

    <ul class="flex flex-wrap">
      <li
        v-for="alphabet in 'ABCDEFGHIJKLMNOQRSTUVWXYZ'"
        :key="alphabet"
        class="text-xl italic [&:not(:last-child)]:after:content-['|'] after:text-xl after:italic after:text-gray-400 after:inline-flex after:mx-2"
      >
        <NuxtLink :to="`/meal-by-name/${alphabet}`" class="hover:text-primary">{{
          alphabet
        }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
