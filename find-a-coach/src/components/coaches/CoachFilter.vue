<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" v-model="search">
        <button class="btn btn-outline-primary" type="button" @click="$emit('search', search)">Search</button>
    </div>
</template>
<script>
export default {
    emits: ['search'],
    data() {
        return { search: '' }
    }
}
</script>