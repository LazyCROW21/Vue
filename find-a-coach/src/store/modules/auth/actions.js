let timer;

export default {
    async signup(context, { email, password }) {
        const signUpURL = context.getters.signUpURL;
        const response = await fetch(
            signUpURL,
            {
                method: 'POST',
                body: JSON.stringify({ email, password, returnSecureToken: true })
            }
        );
        const responseData = await response.json();
        if (!response.ok) {
            throw responseData;
        }
        const expirationDate = new Date().getTime() + ((+responseData.expiresIn) * 1000)
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);
        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, (+responseData.expiresIn) * 1000);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });
    },
    async login(context, { email, password }) {
        const loginURL = context.getters.loginURL;
        const response = await fetch(
            loginURL,
            {
                method: 'POST',
                body: JSON.stringify({ email, password, returnSecureToken: true })
            }
        );
        const responseData = await response.json();
        if (!response.ok) {
            throw responseData;
        }
        const expirationDate = new Date().getTime() + ((+responseData.expiresIn) * 1000)
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);
        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, (+responseData.expiresIn) * 1000);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!timer) {
            const tokenExpiration = localStorage.getItem('tokenExpiration');
            const expiresIn = (+tokenExpiration) - new Date.getTime();
            if(expiresIn < 10000) {
                return;
            }
            timer = setTimeout(() => {
                context.dispatch('autoLogout');
            }, expiresIn);
        }
        if(token && userId) {
            context.commit('setUser', { token, userId });
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        clearTimeout(timer);
        context.commit('setUser', {
            token: null,
            userId: null
        });
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};