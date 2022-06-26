<template>
    <div class="container pt-4">
        <h1>{{ mode === 'login' ? 'Login' : 'Sign Up' }}</h1>
        <hr>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="email">E-Mail</label>
                <input v-model="email" type="text" id="email" class="form-control" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="pwd">Password</label>
                <input v-model="password" type="password" id="pwd" class="form-control" placeholder="Password">
            </div>
            <p v-if="error" class="text-center text-danger">
                {{ error.error.message || 'Something went wrong!' }}
            </p>
            <p>
                {{ navMsg }}
                <button class="btn btn-link p-0 mb-1" @click="changeMode" type="button">here</button>
            </p>
            <button class="btn btn-primary rounded-0 w-100" :disabled="invalid">
                <div v-if="isLoading" class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {{ mode === 'login' ? 'LOGIN' : 'SIGN UP' }}
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    methods: {
        async onSubmit() {
            this.isLoading = true;
            try {
                const authData = { email: this.email, password: this.password };
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', authData);
                } else {
                    await this.$store.dispatch('signup', authData);
                }
                this.$router.replace('/coaches');
            } catch (e) {
                this.error = e;
            }
            this.isLoading = false;
        },
        changeMode() {
            this.mode = (this.mode === 'login' ? 'signup' : 'login');
        }
    },
    computed: {
        invalid() {
            if (this.password.length < 6) return true;
            if (!this.email || !this.email.includes('@')) return true;
            return false;
        },
        navMsg() {
            return this.mode === 'login' ? 'Not a user? create account' : 'Already a user? login';
        }
    }
}
</script>
<style>
.lds-ring {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 1rem;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: white transparent transparent transparent;
}

/* button:hover .lds-ring div {
    border-color: white transparent transparent transparent;
} */

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>