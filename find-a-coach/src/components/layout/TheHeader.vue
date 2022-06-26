<template>
    <header>
        <div class="container header-flex">
            <span class="brand">Find-A-Coach</span>
            <div>
                <router-link to="/coaches">Coaches</router-link>
                <router-link v-if="isAuthenticated" to="/register">Register</router-link>
                <router-link to="/requests">Request</router-link>
                <a v-if="isAuthenticated" href="#" @click="logout">Logout</a>
                <router-link v-else to="/auth">Login</router-link>
            </div>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace('/coaches');
        }
    }
}
</script>
<style scoped>
header {
    background-color: purple;
    color: white;
    padding: 1rem;
}
.brand {
    font-size: 2rem;
    font-weight: bold;
}
.header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0rem 0.5rem;
}
a:hover {
    border: 1px solid white;
}
a.router-link-active {
    border: 1px solid lightpink;
}
</style>