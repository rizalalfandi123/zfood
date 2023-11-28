import filterMeal from "~/store/filterMeal";
import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    ["filter-meal"]: filterMeal,
  },
  plugins: debug ? [createLogger()] : [],
});
