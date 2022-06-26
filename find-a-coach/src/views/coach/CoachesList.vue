<template>
  <div class="container py-4">
    <div class="filter">
      <CoachFilter @search="onSearch" />
    </div>
    <div class="action-bar">
      <button class="btn btn-outline-primary rounded-0" @click="loadCoaches">
        <div v-if="isLoading" class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        Refresh
      </button>
    </div>
    <p v-if="error" class="text-center text-danger">{{ error }}</p>
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
      filter: '',
      error: null,
      isLoading: false
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getAllCoaches'].filter((c) => {
        return c.fullName.includes(this.filter);
      });
    },
    hasCoaches() {
      return this.filteredCoaches && this.filteredCoaches.length !== 0;
    }
  },
  methods: {
    onSearch(value) {
      this.filter = value;
    },
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (err) {
        console.log(err.error)
        this.error = err.error || err.message || 'Something went wrong';
      }
      this.isLoading = false;
    }
  }
}
</script>

<style>
.action-bar {
  margin: 1rem 0rem;
  padding: 0.5rem;
}

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
  border-color: #0d6efd transparent transparent transparent;
}
button:hover .lds-ring div{
  border-color: white transparent transparent transparent;
}
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
