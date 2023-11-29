<script setup lang="ts">

const visiblePassword = useState("visible-password", () => false)

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="relative">
    <input
      :class="[
        'py-2 px-4 rounded-lg border-none outline outline-1 outline-gray-400 w-full',
        'focus:ring-primary focus:border-none',
      ]"
      :type="visiblePassword ? 'text' : 'password'"
      v-bind="$attrs"
    />
    <button type="button" class="absolute right-2 top-2 text-gray-400" @click="visiblePassword = !visiblePassword">
      <IconsEye v-if="visiblePassword" />
      <IconsEyeOff v-else />
    </button>
  </div>
</template>
