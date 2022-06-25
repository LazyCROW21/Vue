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
        <arear-of-expertise v-model="areas"></arear-of-expertise>
      </div>
      <button class="btn btn-outline-primary rounded-0" :disabled="formError">Submit</button>
    </form>
  </div>
</template>

<script>
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
      areas: []
    };
  },
  methods: {
    onSubmit() {
      console.log(this.fullName, this.rate, this.bio, this.areas);
    }
  },
  computed: {
    formError() {
      if(!this.fullName) return true;
      if(!this.rate) return true;
      if(!this.bio) return true;
      if(!this.areas.length) return true;
    }
  }
}
</script>