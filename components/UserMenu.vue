<script setup lang="ts">
const router = useRouter();

const store = useVuexStore();

const { logout } = useAuth();

const user = computed(() => store.state.auth.user);

const handleFavouriteMeals = () => {
  router.push("/favourite-meals");
};
</script>

<template>
  <div v-if="user" class="relative group/user-menu">
    <Avatar>
      {{ user.email.substring(0, 1) }}
    </Avatar>

    <div
      :class="[
        'top-12 border border-gray-300 rounded-lg right-0 absolute p-2 hidden bg-slate-50',
        'group-hover/user-menu:block',
      ]"
    >
      <ul class="flex flex-col gap-2">
        <li class="p-2 border border-gray-300 rounded-md">
          <p>{{ user.email }}</p>
        </li>

        <li>
          <Button
            variant="plain"
            @click="handleFavouriteMeals"
            class="whitespace-nowrap"
            >Favourite Meals</Button
          >
        </li>

        <li>
          <Button variant="plain" @click="logout">Logout</Button>
        </li>
      </ul>
    </div>
  </div>

  <NuxtLink
    v-else
    to="/login"
    class="px-4 py-1.5 bg-primary text-white hover:bg-primary/75 rounded-lg"
    >Login</NuxtLink
  >
</template>
