import type { Store } from "vuex";
import type { GlobalState, User } from "~/types";

type State = GlobalState["auth"];

export const state = (): State => ({
  user: null,
  favouriteMeals: [],
});

export const mutations = {
  ["auth.set-user"](state: State, payload: User) {
    state.user = payload;
  },

  ["auth.add-favourite-meal"](
    state: State,
    payload: State["favouriteMeals"][number] | State["favouriteMeals"]
  ) {
    if (state.user) {
      if (Array.isArray(payload)) {
        state.favouriteMeals = payload;
      } else {
        state.favouriteMeals = [...state.favouriteMeals, payload];
      }
    }
  },

  ["auth.remove-favourite-meal"](state: State, idMeal: string) {
    if (state.user) {
      state.favouriteMeals = state.favouriteMeals.filter(
        (meal) => meal.idMeal !== idMeal
      );
    }
  },

  ["clear"](state: State) {
    state.user = null;
    state.favouriteMeals = [];
  },
};

const getters = {
  isFavouriteMeal: (state: State) => (idMeal: string) => {
    return state.favouriteMeals.some((meal) => meal.idMeal == idMeal);
  },

  isLogin: (state: State) => state.user !== null,

  meal: (state: State) => (idMeal: string) => {
    return state.favouriteMeals.find((meal) => meal.idMeal == idMeal);
  },
};

const actions = {
  getFavouriteMeals: (store: Store<GlobalState>) => {
    $fetch("/api/favourite-meals").then((res) => {
      store.commit("auth.add-favourite-meal", res);
    });
  },
};

export default { mutations, state, getters, actions };
