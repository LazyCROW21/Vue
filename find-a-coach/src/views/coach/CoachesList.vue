<template>
  <div class="container py-4">
    <div class="filter">
      <CoachFilter @search="onSearch" />
    </div>
    <div class="action-bar">
      <button class="btn btn-outline-primary rounded-0">Refresh</button>
    </div>
    <div class="coach-list-wrapper" v-if="hasCoaches">
      <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach"></coach-item>
    </div>
    <div v-else>
      No coaches found..
    </div>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      filter: ''
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getAllCoaches'].filter((c) => {
        return c.name.includes(this.filter);
      });
    },
    hasCoaches() {
      return this.filteredCoaches && this.filteredCoaches.length !== 0;
    }
  },
  methods: {
    onSearch(value) {
      this.filter = value;
    }
  }
}
</script>

<style>
.action-bar {
  margin: 1rem 0rem;
  padding: 0.5rem;
}
</style>
