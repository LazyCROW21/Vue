<template>
  <the-header></the-header>
  <div class="container">
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResources from './components/TheResources.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheResources
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 720px;
  width: 100%;
  margin: auto;
  padding: 1rem 0.5rem;
}
</style>
