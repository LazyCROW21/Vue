<template>
    <div class="container py-4">
        <button class="btn btn-info">&leftarrow; Back</button>
        <div class="display-2 border-start border-info border-4 my-4 p-2 shadow">{{ coach.name }}</div>
        <div class="border-start border-info border-4 my-4 p-2 shadow">
            Interested? Reach out Now:
            <router-link :to="contactLink">Contact</router-link>
        </div>
        <router-view></router-view>
        <div class="border-start border-info border-4 my-4 p-2">
            <span v-for="(area, i) in coach.areas" :key="area" class="fs-6 shadow badge rounded-pill bg-dark me-2">
                {{ area }}
            </span>
        </div>
        <div class="border-start border-info border-4 my-4 p-2">
            Rate: {{ coach.rate }}/hour
        </div>
        <div class="text-lead border-start border-info border-4 my-4 p-2 shadow">
            {{ coach.bio }}
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    props: [
        "id"
    ],
    computed: {
        ...mapGetters({
            coaches: 'coaches/getAllCoaches'
        }),
        coach() {
            const id = +this.id;
            return this.coaches.find((c) => id === c.id);
        },
        contactLink() {
            return `${this.$route.path}/contact`;
        },
        getBadgeClass(index) {
            const idx = index % 7;
            switch (idx) {
                case 0: return 'bg-primary';
                case 1: return 'bg-secondary';
                case 2: return 'bg-success';
                case 3: return 'bg-danger';
                case 4: return 'bg-warning';
                case 5: return 'bg-info';
                default: return 'bg-dark'
            }
        }
    },
    mounted() {
        // console.log(`${this.$route.path}/contact`);
        // console.log(this.contactLink);
    }
}
</script>