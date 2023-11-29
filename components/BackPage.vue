<script setup lang="ts">
import type { NuxtLinkProps } from "nuxt/app";

defineProps<{ to: NuxtLinkProps["to"] }>();
</script>

<template>
  <div
    class="self-start px-4 py-2 rounded-lg hover:bg-gray-100/75 hover:text-primary w-fit"
  >
    <NuxtLink v-bind="$props">
      <IconsArrowLeft class="inline-flex mr-2" /> Back
    </NuxtLink>
  </div>
</template>
