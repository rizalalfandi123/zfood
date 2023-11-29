<script setup lang="ts">
import type { Meal } from "~/types";

interface DetailMealResponse {
  meals: Array<Meal>;
}

const route = useRoute();

const store = useVuexStore();

const { data } = await useFetch(
  `https://www.themealdb.com/api/json/v1/1/lookup.php`,
  {
    query: {
      i: route.params.id,
    },
    transform: (response: DetailMealResponse) => response.meals[0] ?? {},
  }
);

const addToFavourite = async () => {
  await $fetchWithAuth("/api/favourite-meal", {
    method: "POST",
    body: {
      idMeal: data.value?.idMeal ?? "",
      strMeal: data.value?.strMeal ?? "",
    },
  });

  store.commit("auth.add-favourite-meal", {
    idMeal: data.value?.idMeal,
    strMeal: data.value?.strMeal,
  });
};
</script>

<template>
  <div>
    <!-- <div :class="['flex flex-col gap-4', 'lg:flex-row']"> -->
    <img
      :src="data?.strMealThumb"
      :alt="data?.strMeal"
      :class="[
        'w-full h-80 object-cover rounded-xl',
        'md:h-[50vh] md:float-left',
        'lg:w-[45%] lg:shrink-0 lg:h-[75vh]',
      ]"
    />
    <div>
      <h2 class="text-3xl font-medium">{{ data?.strMeal }}</h2>

      <button @click="addToFavourite">add to vaforite</button>

      <div>
        <h3>Instructions</h3>
        <p
          v-for="sentence in (data?.strInstructions ?? '').split('\n')"
          class="my-1"
        >
          {{ sentence }}
        </p>
      </div>

      <div>
        <h3>Ingredients</h3>
        <ol class="list-decimal list-inside">
          <li v-for="ingredient in getIngredientAndMeasureMeal(data)">
            {{ ingredient.ingredient }} ({{ ingredient.measure }})
          </li>
        </ol>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
