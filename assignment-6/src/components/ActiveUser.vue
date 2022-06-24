<template>
  <div class="active-user">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validator: (age) => {
                if(age < 0) {
                    return false;
                }
                return true;
            }
        }
    }
}
</script>

<style>
.active-user {
    text-align: center;
    border: 1px solid grey;
    margin: 0.25rem 0rem;
}
</style>