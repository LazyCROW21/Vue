export default {
    getRequestByCoachId(state, _0, _1, rootGetters) { 
        return state.requests.filter((req) => req.coachId === rootGetters.userId);
    }
};