import type { GlobalState, Meal, User } from "~/types";

type State = GlobalState["auth"];

export const state = (): State => ({
  user: (function () {
    if (typeof window === "undefined") return null;

    const storedData = localStorage.getItem("auth");

    if (!storedData) {
      return null;
    }

    return JSON.parse(storedData);
  })(),
});

export const mutations = {
  ["auth.set-user"](state: State, payload: User) {
    localStorage.setItem("auth", JSON.stringify(payload));
    state.user = payload;
  },
  ["auth.add-favourite-meal"](state: State, payload: Meal) {
    if (state.user) {
      state.user.favouriteMeals = [...state.user.favouriteMeals, payload];
    }
  },
};

export default { mutations, state };
