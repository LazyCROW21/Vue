import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            requests: [
                {
                    id: 1,
                    coachId: 1,
                    fullName: 'HK',
                    email: 'a@a.com',
                    subject: 'gaming',
                    message: 'Lorem 123'
                }
            ]
        }
    },
    getters,
    mutations,
    actions
}