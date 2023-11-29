import filterMeal from "~/store/filterMeal";
import auth from "~/store/auth";
import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    ["filter-meal"]: filterMeal,
    auth,
  },
  plugins: [...(debug ? [createLogger()] : [])],
});
