<template>
  <div>
    <header class="border-b border-b-gray-300 sticky top-0 right-0 z-10 bg-slate-50">
      <Header class="limit-width-content" />
    </header>

    <main class="first-of-type:my-4 limit-width-content min-h-[75vh]">
      <slot />
    </main>

    <footer class="py-4 border-t border-gray-300">
      <div class="limit-width-content">
        <p>© 2023 TheMealDB</p>
      </div>
    </footer>
  </div>
</template>

<style>
.limit-width-content {
  @apply max-w-screen-xl px-2 mx-auto;
}
</style>
