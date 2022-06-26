export default {
    async sendRequest(context, payload) {
        const newRequest = {
            coachId: payload.coachId,
            email: payload.email,
            fullName: payload.fullName,
            subject: payload.subject,
            message: payload.message
        }
        const firebaseUrl = context.rootGetters.firebaseURL;
        const response = await fetch(
            `${firebaseUrl}/requests/${payload.coachId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        );
        if (!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();
        newRequest.id = responseData.name;
        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const token = context.rootGetters.token;
        const coachId = context.rootGetters.userId;
        const firebaseUrl = context.rootGetters.firebaseURL;
        const response = await fetch(
            `${firebaseUrl}/request/${coachId}.json?auth=${token}`
        );
        if (!response.ok) {
            const errObj = await response.json()
            throw errObj;
        }
        const responseData = await response.json();
        const requestsArray = [];
        for (const id in responseData) {
            const requestData = {
                id,
                fullName: responseData[id].fullName,
                email: responseData[id].email,
                subject: responseData[id].subject,
                message: responseData[id].message,
            };
            requestsArray.push(requestData);
        }
        context.commit('setRequests', requestsArray);
    },
};