import { createStore } from 'vuex';
import ProductStore from './modules/products';
import CartStore from './modules/cart';
import AuthStore from './modules/auth';

export default createStore({
    modules: {
        ProductStore,
        CartStore,
        AuthStore
    }
})