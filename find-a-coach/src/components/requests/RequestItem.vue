<template>
    <div class="card shadow p-3">
        <h3>From: {{ request.fullName }}</h3>
        <p><a :href="emailLink">{{ request.email }}</a></p>
        <p><strong>Date: </strong>{{ request.date }}</p>
        <p><strong>Subject: </strong>{{ request.subject }}</p>
        <p><strong>Message:</strong></p>
        <p class="p-2 border">{{ request.message }}</p>
    </div>
</template>
<script>
export default {
    props: ['request'],
    computed: {
        emailLink() {
            return 'mailto:' + this.request.email;
        }
    }
}
</script>