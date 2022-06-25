import CartGetters from './getters';
import CartActions from './actions';
import CartMutations from './mutations';

export default {
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 }
        };
    },
    getters: CartGetters,
    mutations: CartMutations,
    actions: CartActions
};