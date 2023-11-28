<script setup lang="ts">
import type { MealCategory } from "~/types";

const { data: mealCategories } = await useFetch<{
  categories: Array<MealCategory>;
}>("https://www.themealdb.com/api/json/v1/1/categories.php");
</script>

<template>
  <section class="space-y-2">
    <h1 class="text-2xl font-medium tracking-wide">Categories</h1>

    <ul class="w-full overflow-x-auto flex gap-2 thin-scrollbar">
      <li
        v-for="category in mealCategories?.categories ?? []"
        :key="category.idCategory"
      >
        <NuxtLink :to="`/meal-by-category/${category.strCategory}`">
          <div class="w-28 shrink-0 flex flex-col justify-center items-center">
            <img
              :src="category.strCategoryThumb"
              :alt="category.strCategory"
              class="w-24 h-24 object-cover rounded-full ring-2 my-2 ring-gray-400 hover:ring-primary"
            />

            <p>{{ category.strCategory }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
