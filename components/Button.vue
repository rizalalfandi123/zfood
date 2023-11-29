<script lang="ts" setup>
interface Props {
  variant: "primary" | "plain";
}

withDefaults(defineProps<Props>(), { variant: "primary" });
</script>

<template>
  <button
    :class="[
      'px-4 py-1.5 rounded-lg w-full active:scale-95 transition-[transform]',
      { 'bg-primary text-white': variant === 'primary' },
      { 'hover:bg-gray-100/75 hover:text-primary dark:hover:bg-slate-600': variant === 'plain' },
    ]"
  >
    <slot />
  </button>
</template>
