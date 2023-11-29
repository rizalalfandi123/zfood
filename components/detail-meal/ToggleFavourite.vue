<script lang="ts" setup>
import type { Meal, GlobalState } from "~/types";

const props = defineProps<{ meal: Meal | null }>();

const isPendingAction = useState<boolean>("pending-meal-action", () => false);

const store = useVuexStore();

const isFavouriteMeal = computed(() =>
  store.getters.isFavouriteMeal(props.meal?.idMeal)
);

const isLogin = computed(() => store.getters.isLogin);

const addToFavourite = async () => {
  try {
    isPendingAction.value = true;

    const meal = await $fetch("/api/favourite-meal", {
      method: "POST",
      body: props.meal,
    });

    store.commit("auth.add-favourite-meal", {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      id: meal.id,
      strMealThumb: meal.strMealThumb,
    });
  } catch (error) {
    console.log({ error });
  } finally {
    isPendingAction.value = false;
  }
};

const removeFromFavourite = async () => {
  try {
    isPendingAction.value = true;
    const meal = await $fetch("/api/favourite-meal", {
      method: "DELETE",
      body: store.getters.meal(props.meal?.idMeal),
    });

    store.commit("auth.remove-favourite-meal", meal.idMeal);
  } catch (error) {
    console.log({ error });
  } finally {
    isPendingAction.value = false;
  }
};
</script>

<template>
  <div v-if="isLogin">
    <Button v-if="!isFavouriteMeal" @click="addToFavourite"
      >Add to Favorite</Button
    >
    <Button v-else variant="plain" @click="removeFromFavourite">
      <IconsLoader
        v-if="isPendingAction"
        class="animate-spin inline-flex mr-1"
      />
      Remove from Favourite</Button
    >
  </div>
</template>
