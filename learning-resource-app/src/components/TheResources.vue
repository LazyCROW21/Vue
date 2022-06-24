<template>
  <base-card>
    <base-button
      type="button"
      :mode="selectedTab === 'stored-resources' ? 'nav-active' : 'nav'"
      @click="setTab('stored-resources')"
      >Stored Resources</base-button
    >
    <span>|</span>
    <base-button
      type="button"
      :mode="selectedTab === 'add-resource' ? 'nav-active' : 'nav'"
      @click="setTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <hr />
  <KeepAlive>
    <component :is="selectedTab"></component>
  </KeepAlive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: 1,
          title: "title",
          description: "description",
          link: "#",
        },
      ],
      newId: 2,
    };
  },
  methods: {
    setTab(index) {
      this.selectedTab = index;
    },
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: (resource) => {
        this.storedResources.unshift({
          id: this.newId,
          ...resource,
        });
        this.selectedTab = "stored-resources";
        this.newId++;
      },
      removeResource: (resourceId) => {
        const index = this.storedResources.findIndex((res) => {
          return res.id === resourceId;
        });
        this.storedResources.splice(index, 1);
      },
    };
  },
};
</script>

<style scoped>
span {
  margin: 0rem 1rem;
}
hr {
  margin: 0.5rem 0rem;
}
</style>