<template>
  <form @submit.prevent="onAddResource">
    <input type="text" placeholder="Title" v-model="title" />
    <textarea placeholder="Description" v-model="description"></textarea>
    <input type="url" placeholder="Link" v-model="link" />
    <base-button mode="submit">Add</base-button>
  </form>
  <Teleport to="body">
    <base-dialog v-if="invalid" title="Invalid Input!" @close="invalid = false">
      <template #body> Please fill the form with correct data. </template>
      <template #actions>
        <base-button mode="close" @click="invalid = false">Close</base-button>
      </template>
    </base-dialog>
  </Teleport>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      title: "",
      description: "",
      link: "",
      invalid: false,
    };
  },
  methods: {
    onAddResource() {
      if (
        this.title.trim() === "" ||
        this.description.trim() === "" ||
        this.link.trim() === ""
      ) {
        this.invalid = true;
        return;
      }
      this.addResource({
        title: this.title,
        description: this.description,
        link: this.link,
      });
      this.title = "";
      this.description = "";
      this.link = "";
    },
  },
  inject: ["addResource"],
};
</script>

<style scoped>
input,
textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  border: 1px solid grey;
  outline: none;
  width: 100%;
  margin: 0.5rem 0rem;
}
input:focus,
textarea:focus {
  border-color: skyblue;
  box-shadow: 0px 0px 4px;
}
</style>