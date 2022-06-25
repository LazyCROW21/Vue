<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Skill" v-model.trim="newSkill">
        <button class="btn btn-outline-success" type="button" @click="addSkill" :disabled="!newSkill">Add</button>
    </div>
    <hr>
    <ul class="list-group">
        <li class="list-group-item" v-for="skill in skills">
            <button class="btn btn-close" @click="removeSkill(skill)"></button>
            {{ skill }}
        </li>
    </ul>
</template>
<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
        return {
            newSkill: '',
            skills: new Set()
        }
    },
    methods: {
        addSkill() {
            this.skills.add(this.newSkill);
            this.newSkill = '';
            this.$emit('update:modelValue', Array.from(this.skills));
        },
        removeSkill(skill) {
            this.skills.delete(skill);
            this.$emit('update:modelValue', Array.from(this.skills));
        }
    },
    created() {
        this.skills = new Set(this.modelValue);
    }
}
</script>