<script setup lang="ts">
import type { Meal } from "~/types";

interface MealProps {
  meal: Meal;
}

const props = defineProps<MealProps>();

const store = useVuexStore();
</script>

<template>
  <div
    :class="[
      'group/meal',
      'aspect-[4/5] relative rounded-xl',
      'border-2 border-gray-300',
      'hover:border-primary',
      'transition-all',
      'md:hover:!grayscale-0 md:group-hover/meal-list:grayscale-[0.75]',
    ]"
  >
    <FavouriteMealStart
      class="absolute top-1 right-1"
      :idMeal="props.meal.idMeal"
    />
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="object-cover w-full h-full rounded-[10px]"
    />
    <div
      :class="[
        'absolute w-[calc(100%-1rem)] bottom-0 bg-background text-background-foreground mx-2 mb-2 text-center p-0.5 rounded-md border-2 border-gray-300',
        'group-hover/meal:bg-amber-500 group-hover/meal:border-amber-500',
        'md:w-[calc(100%-1.5rem)] md:mx-3 md:mb-3 md:p-1',
      ]"
    >
      <h2
        :class="[
          'font-medium text-base',
          'group-hover/meal:text-slate-50',
          'md:text-lg',
        ]"
      >
        {{ meal.strMeal }}
      </h2>
    </div>
  </div>
</template>
