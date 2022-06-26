<template>
  <div class="container py-4">
    <h1>Register as a Coach</h1>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Fullname" v-model="fullName">
      </div>
      <div class="mb-3">
        <input class="form-control" type="number" step="1" min="0" placeholder="Hourly rate" v-model="rate">
      </div>
      <div class="mb-3">
        <textarea class="form-control" rows="5" placeholder="Bio" v-model="bio"></textarea>
      </div>
      <div class="mb-3">
        <arear-of-expertise v-model="aoe"></arear-of-expertise>
      </div>
      <button class="btn btn-outline-primary rounded-0" :disabled="formError">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ArearOfExpertise from '../../components/form/AreaOfExpertise.vue';

export default {
  components: {
    ArearOfExpertise
  },
  data() {
    return {
      fullName: '',
      rate: null,
      bio: '',
      aoe: []
    };
  },
  methods: {
    onSubmit() {
      const data = {
        fullName: this.fullName,
        bio: this.bio,
        rate: this.rate,
        aoe: this.aoe,
      };
      this.registerCoach(data);
      this.fullName = '';
      this.bio = '';
      this.rate = null;
      this.aoe = [];
    },
    ...mapActions({
      registerCoach: 'coaches/registerCoach'
    })
  },
  computed: {
    formError() {
      if (!this.fullName) return true;
      if (!this.rate) return true;
      if (!this.bio) return true;
      if (!this.aoe.length) return true;
    }
  }
}
</script>