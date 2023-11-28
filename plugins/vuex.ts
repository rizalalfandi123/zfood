import store from "~/store";

export default defineNuxtPlugin({
  name: "VUEX",
  setup: async (nuxtApp) => {
    nuxtApp.vueApp.use(store);
  },
});
