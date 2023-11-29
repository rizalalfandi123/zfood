<script setup lang="ts">
const route = useRoute();

const store = useVuexStore();

const favouriteMeals = computed(() => store.state.auth.favouriteMeals);
</script>

<template>
  <div class="space-y-6">
    <section class="space-y-5">
      <h1 class="text-2xl font-medium tracking-wide">
        {{ route.params.name }}
      </h1>
      <MealList :pending="false" :meals="favouriteMeals" />
    </section>
  </div>
</template>
