const {
    createApp
} = Vue

createApp({
    data() {
        return {
            tasks: [],
            taskId: 0,
            taskTitle: '',
            showList: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push({
                id: this.taskId,
                title: this.taskTitle
            });
            this.taskId++;
            this.taskTitle = '';
        }
    }
}).mount('#assignment')