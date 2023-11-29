<script setup lang="ts">
import type { MealListResponse } from "~/types";

const route = useRoute();

const { data, pending } = await useFetch<MealListResponse>(
  `https://www.themealdb.com/api/json/v1/1/search.php`,
  {
    query: {
      f: route.params.name,
    },
  }
);
</script>

<template>
  <div class="space-y-6">
    <section class="space-y-5">
      <BackPage to="/" />

      <h1 class="text-2xl font-medium tracking-wide">
        Meals whose first letter is {{ route.params.name }}
      </h1>

      <MealList :pending="pending" :meals="data?.meals ?? []" />
    </section>
  </div>
</template>
