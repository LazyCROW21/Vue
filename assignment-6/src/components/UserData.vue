<template>
  <div>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="name" placeholder="Name" required>
        <input type="number" v-model="age" placeholder="Age" min="0" step="1" required>
        <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: 18
        }
    },
    emits: [
        'newUser'
    ],
    methods: {
        onSubmit() {
            this.$emit('newUser', { name: this.name, age: this.age });
        }
    }
}
</script>

<style>
input, button {
    margin: 1rem;
    padding: 0.5rem;
}
</style>