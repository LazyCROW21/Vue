<template>
  <div class="container py-4">
    <div class="border p-2 position-relative">
      <button class="btn btn-close position-absolute top-0 end-0 mt-2 me-2" @click="$router.back"></button>
      <h1>Contact this Coach</h1>
      <hr>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <input class="form-control" type="text" placeholder="Fullname" v-model="fullName">
        </div>
        <div class="mb-3">
          <input class="form-control" type="email" placeholder="Email" v-model="email">
        </div>
        <div class="mb-3">
          <input class="form-control" type="text" placeholder="Subject" v-model="subject">
        </div>
        <div class="mb-3">
          <textarea class="form-control" rows="5" placeholder="Message" v-model="message"></textarea>
        </div>
        <button class="btn btn-outline-primary rounded-0" :disabled="formError">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    onSubmit() {
      console.log(this.fullName, this.email, this.subject, this.message);
    }
  },
  computed: {
    formError() {
      if (!this.fullName) return true;
      if (!this.email) return true;
      if (!this.subject) return true;
      if (!this.message) return true;
    }
  }
}
</script>