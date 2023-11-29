<template>
  <div
    class="py-4 flex justify-between items-center"
  >
    <NuxtLink to="/" class="flex items-center hover:text-primary">
      <IconsHemburger class="mr-2" />
      <h2 class="font-semibold text-xl">ZFood</h2>
    </NuxtLink>

    <div>
      <UserMenu />
    </div>
  </div>
</template>
