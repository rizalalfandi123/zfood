import type { GlobalState } from "~/types";
import { useStore } from "vuex";

export default function useVuexStore() {
  const store = useStore<GlobalState>();

  return store;
}
