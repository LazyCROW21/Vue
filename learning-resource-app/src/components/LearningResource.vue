<template>
  <base-card>
    <div class="lr-wrapper">
      <div class="btn-wrapper">
        <base-button type="button" mode="delete" @click="removeResource(id)"
          >Delete</base-button
        >
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="link" target="_blank">View Resource</a>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],
  inject: ["removeResource"],
};
</script>

<style scoped>
.lr-wrapper {
  position: relative;
}
.btn-wrapper {
  position: absolute;
  right: 0;
  top: 0;
}
h2,
h3,
h4,
p {
  margin-bottom: 1rem;
}
</style>
