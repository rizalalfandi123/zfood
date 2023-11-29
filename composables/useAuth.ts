export default function useAuth() {
  const authCookie = useCookie("auth");

  const store = useVuexStore();

  watch(store.state.auth, (auth) => {
    authCookie.value = JSON.stringify(auth.user);
  });

  onBeforeMount(() => {
    if (authCookie.value) {
      store.commit("auth.set-user", authCookie.value);

      store.dispatch("getFavouriteMeals");
    }
  });

  const logout = () => {
    store.commit("clear");
  };

  const user = computed(() => store.state.auth.user);

  return { logout, user };
}
