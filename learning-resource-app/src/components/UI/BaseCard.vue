<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 0.2rem #000;
  margin: 0.5rem 0rem;
}
</style>