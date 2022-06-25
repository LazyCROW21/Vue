import { createStore } from "vuex";
import CoachStore from "./modules/coaches";

export default createStore({
  modules: {
    coaches: CoachStore
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
