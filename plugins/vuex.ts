import store from "~/store/index";

export default defineNuxtPlugin({
  name: "VUEX",
  setup: async (nuxtApp) => {
    nuxtApp.vueApp.use(store);
  },
});
