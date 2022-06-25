import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 1,
                    rate: 2,
                    name: 'HK',
                    areas: ['gaming', 'party'],
                    bio: 'Lorem 123'
                }
            ]
        }
    },
    getters,
    mutations,
    actions
}