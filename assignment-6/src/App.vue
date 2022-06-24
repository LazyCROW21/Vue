<template>
  <div class="container">
    <user-data @newUser="addNewUser"></user-data>
    <hr />
    <active-user
      v-for="activeuser in activeUsers"
      :key="activeuser.id"
      v-bind="activeuser"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      activeUsers: [],
    };
  },
  methods: {
    addNewUser(data) {
      data.id = this.id;
      this.activeUsers.push(data);
      this.id++;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 1rem;
  max-width: 720px;
}
</style>