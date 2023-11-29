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
    </section>

    <MainPageMealCategories />

    <MainPageMealByCountry />

    <MainPageBrowseByName />
  </div>
</template>
