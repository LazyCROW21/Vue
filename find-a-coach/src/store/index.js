import { createStore } from "vuex";
import CoachStore from "./modules/coaches";
import RequestsStore from "./modules/requests";
import AuthStore from "./modules/auth";

export default createStore({
  modules: {
    coaches: CoachStore,
    requests: RequestsStore,
    auth: AuthStore
  },
  state() {
    return {
      userId: 2,
      firebaseURL: 'https://find-a-coach-97165-default-rtdb.asia-southeast1.firebasedatabase.app',
      signUpURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
      loginURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
      API_KEY: ' AIzaSyCWEEaTHGiuXe29q9YYFBiPMBJANb_QTzo'
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    firebaseURL(state) {
      return state.firebaseURL;
    },
    signUpURL(state) {
      return state.signUpURL + state.API_KEY;
    },
    loginURL(state) {
      return state.loginURL + state.API_KEY;
    }
  },
  mutations: {},
  actions: {},
});
