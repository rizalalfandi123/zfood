<script setup lang="ts">
import type { Meal } from "~/types";

interface Props {
  pending: boolean;
  meals: Array<Meal>;
}

defineProps<Props>();
</script>

<template>
  <ul
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
    <li v-else v-for="meal in meals" :key="meal.idMeal">
      <NuxtLink :to="`/meal/${meal.idMeal}`">
        <MealCard :meal="meal" />
      </NuxtLink>
    </li>
  </ul>
</template>
