export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const firebaseUrl = context.rootGetters.firebaseURL;
        const token = context.rootGetters.token;
        const coachData = {
            fullName: payload.fullName,
            bio: payload.bio,
            rate: payload.rate,
            aoe: payload.aoe,
        };
        const response = await fetch(
            `${firebaseUrl}/coaches/${userId}.json?auth=${token}`,
            {
                method: 'PUT',
                body: JSON.stringify(coachData)
            }
        );
        if (!response.ok) {
            throw await response.json();
        }
        // const responseData = await response.json();
        context.commit('addCoach', {
            ...coachData,
            id: userId
        });

    },
    async loadCoaches(context, payload) {
        const firebaseUrl = context.rootGetters.firebaseURL;
        const response = await fetch(
            `${firebaseUrl}/coaches.json`
        );
        if (!response.ok) {
            const errObj = await response.json()
            throw errObj;
        }
        const responseData = await response.json();
        const coachesArray = [];
        for (const id in responseData) {
            const coachData = {
                id,
                fullName: responseData[id].fullName,
                bio: responseData[id].bio,
                rate: responseData[id].rate,
                aoe: responseData[id].aoe,
            };
            coachesArray.push(coachData);
        }
        context.commit('setCoaches', coachesArray);
    },
};