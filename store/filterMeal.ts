import type { GlobalState, MealCategory } from "~/types";

type State = GlobalState["filter-meal"];

export const state = (): State => ({
  search: "",
});

export const mutations = {
  ["filter-meal.change-search-value"](state: State, payload: string) {
    state.search = payload;
  },
};

export default { mutations, state };
