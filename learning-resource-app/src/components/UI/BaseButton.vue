<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
    props: [ 'mode' ]
}
</script>

<style scoped>
button {
    padding: 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
    cursor: pointer;
}
.delete {
    color: white;
    border-color: rgb(245, 147, 178);
    background: red;
}
/* .delete:hover {
    background: red;
} */
.submit {
    color: green;
    border-color: green;
    background: lightgreen;
}
.nav {
    color: white;
    border-color: rgb(147, 234, 245);
    background: blue;
}
.nav-active {
    color: white;
    border-color: rgb(147, 234, 245);
    background: skyblue;
}
.close {
    color: white;
    border-color: rgb(98, 117, 119);
    background: darkgrey;
}
</style>