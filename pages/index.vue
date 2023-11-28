<script setup lang="ts">
import type { MealListResponse } from "~/types";

const store = useVuexStore();

const searchValue = computed(() => store.state["filter-meal"].search);

const debounceSearchValue = useDebounce<string>(searchValue);

const { data, pending } = await useAsyncData<MealListResponse>(
  "meals",
  () =>
    $fetch("https://www.themealdb.com/api/json/v1/1/search.php", {
      query: { s: debounceSearchValue.value ?? "" },
    }),
  { watch: [debounceSearchValue] }
);
</script>

<template>
  <div class="space-y-6">
    <MainPageSearchMeal />

    <section class="space-y-2">
      <h1 class="text-2xl font-medium tracking-wide">Meals</h1>
      <MealList :pending="pending" :meals="data?.meals ?? []" />
      <!-- <ul
        :class="[
          'group/meal-list',
          'grid grid-cols-2 gap-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
          'xl:grid-cols-5',
        ]"
      >
        <li v-if="pending" v-for="_skeleton in 'skeleton'">
          <div class="bg-gray-300 rounded-xl aspect-[4/5] animate-pulse" />
        </li>
        <li v-else v-for="meal in data?.meals ?? []" :key="meal.idMeal">
          <NuxtLink :to="`meal/${meal.idMeal}`">
            <MealCard :meal="meal" />
          </NuxtLink>
        </li>
      </ul> -->
    </section>

    <MainPageMealCategories />

    <MainPageMealByCountry />

    <MainPageBrowseByName />
  </div>
</template>
