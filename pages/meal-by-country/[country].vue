<script setup lang="ts">
import type { MealListResponse } from "~/types";

const route = useRoute();

const { data, pending } = await useFetch<MealListResponse>(
  `https://www.themealdb.com/api/json/v1/1/filter.php`,
  {
    query: {
      a: route.params.country,
    },
  }
);
</script>

<template>
  <div class="space-y-6">
    <section class="space-y-5">
      <h1 class="text-2xl font-medium tracking-wide">
        {{ route.params.country }}
      </h1>
      <MealList :pending="pending" :meals="data?.meals ?? []" />
    </section>
  </div>
</template>
