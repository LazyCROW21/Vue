import AuthGetters from './getters';
import AuthActions from './actions';
import AuthMutations from './mutations';

export default {
    state() {
        return {
            isLoggedIn: false
        };
    },
    getters: AuthGetters,
    mutations: AuthMutations,
    actions: AuthActions
};