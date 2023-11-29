<script setup lang="ts">
const props = defineProps<{ idMeal?: string }>();

const store = useVuexStore();

const isFavourite = computed(() => store.getters.isFavouriteMeal(props.idMeal));
</script>

<template>
  <div
    v-show="isFavourite"
    class="w-fit h-fit bg-slate-50 rounded-full p-1"
  >
    <IconsStart class="text-primary" />
  </div>
</template>
