<template>
    <div class="container pt-3">
        <h2>Requests</h2>
        <hr>
        <div v-if="hasRequest">
            <request-item v-for="request in requests" :key="request.id" :request="request"></request-item>
        </div>
        <div v-else>
            You haven't received any requests yet!
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem
    },
    computed: {
        ...mapGetters({
            requests: 'requests/getRequestByCoachId'
        }),
        hasRequest() {
            return this.requests && this.requests.length;
        }
    }
}
</script>