<script lang="ts" setup>
import type { MealCategory } from "~/types";

const store = useVuexStore();

const searchValue = computed(() => store.state["filter-meal"].search);

const handleChangeSearchValue = (e: Event) => {
  store.commit(
    "filter-meal.change-search-value",
    (e.target as unknown as { value: string }).value
  );
};
</script>

<template>
  <section
    class="w-full flex flex-col gap-2 justify-between items-center md:flex-row"
  >
    <Input
      type="text"
      @input="handleChangeSearchValue"
      :value="searchValue"
      class="bg-background md:w-72"
      placeholder="Search ..."
    />
  </section>
</template>
