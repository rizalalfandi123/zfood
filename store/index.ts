import filterMeal from "~/store/filterMeal";
import auth from "~/store/auth";
// import VuexPersistence from "vuex-persist";
import { createStore, createLogger } from "vuex";
// import type { GlobalState } from "~/types";

const debug = process.env.NODE_ENV !== "production";

//@ts-ignore
// const vuexLocal = window.VuexPersistence();

export default createStore({
  modules: {
    ["filter-meal"]: filterMeal,
    auth,
  },
  plugins: [
    // vuexLocal.plugin,

    ...(debug ? [createLogger()] : []),
  ],
});
