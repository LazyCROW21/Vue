<template>
  <div class="backdrop" @click="$emit('close')">
    <dialog open>
      <header>
        <slot name="header">
          <h3>{{ title }}</h3>
        </slot>
      </header>
      <section>
        <slot name="body">
          <p>{{ body }}</p>
        </slot>
      </section>
      <menu>
        <slot name="actions"></slot>
      </menu>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Modal",
    },
    body: {
      type: String,
      required: false,
      default: "Modal",
    },
  },
};
</script>

<style scoped>
dialog {
  padding: 1rem;
  width: 100%;
  max-width: 480px;
  margin: 2rem auto;
}
header,
section,
h1,
h2,
h3,
h4,
p {
  margin-bottom: 1rem;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rbga(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}
</style>
