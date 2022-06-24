<template>
  <div class="sr-row">
    <LearningResource
      v-for="sr in storedResources"
      :key="sr.id"
      :id="sr.id"
      :title="sr.title"
      :description="sr.description"
      :link="sr.link"
    />
  </div>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  props: ["title", "description", "link"],
  components: {
    LearningResource,
  },
  inject: [ 'storedResources' ],
};
</script>

<style>
</style>