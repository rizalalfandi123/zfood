<script setup lang="ts">

const isDarkMode = useState('dark-mode', () => false)

const handleDarkMode = () => {
  const isDark = document.documentElement.getAttribute("data-mode") === "dark";

  document.documentElement.setAttribute("data-mode", isDark ? "light" : "dark");

  isDarkMode.value = isDark
};
</script>

<template>
  <div class="py-4 flex justify-between items-center">
    <NuxtLink to="/" class="flex items-center hover:text-primary">
      <IconsHemburger class="mr-2" />
      <h2 class="font-semibold text-xl">ZFood</h2>
    </NuxtLink>

    <div class="flex gap-2 items-center">
      <button @click="handleDarkMode">
        <IconsSun v-if="!isDarkMode" />
        <IconsMonth v-else />
      </button>
      <UserMenu />
    </div>
  </div>
</template>
