<template>
    <div class="card p-3 shadow rounded-3">
        <h2>{{ coach.fullName }}</h2>
        <h4> {{ coach.rate }}/hour</h4>
        <div class="mb-2">
            <span v-for="(area, i) in coach.aoe" :key="area" class="badge rounded-pill bg-dark me-2">
                {{ area }}
            </span>
        </div>
        <div class="action text-end">
            <router-link :to="contactLink" class="me-2">Contact</router-link>
            <router-link :to="detailLink">Details</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "coach"
    ],
    computed: {
        contactLink() {
            return `${this.$route.path}/${this.coach.id}/contact`;
        },
        detailLink() {
            return `${this.$route.path}/${this.coach.id}`;
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
}
</script>