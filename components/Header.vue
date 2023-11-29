<script setup lang="ts">
const store = useVuexStore();

const user = computed(() => store.state.auth.user);
</script>

<template>
  <header
    class="py-4 flex justify-between items-center sticky top-0 right-0 z-10 bg-slate-50"
  >
    <NuxtLink to="/" class="flex items-center hover:text-primary">
      <IconsHemburger class="mr-2" />
      <h2 class="font-semibold text-xl">ZFood</h2>
    </NuxtLink>

    <div>
      <p v-if="user">{{ user.email }}</p>
      <NuxtLink
        v-else
        to="/login"
        class="px-4 py-1.5 bg-primary text-white hover:bg-primary/75 rounded-lg"
        >Login</NuxtLink
      >
    </div>
  </header>
</template>
