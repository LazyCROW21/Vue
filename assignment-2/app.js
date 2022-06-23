const {
    createApp
} = Vue

createApp({
    data() {
        return {
            OUTPUT1: '',
            OUTPUT2: ''
        }
    },
    methods: {
        showAlert(msg) {
            alert(msg);
        },
        inp1(event) {
            this.OUTPUT1 = event.target.value;
        },
        inp2(event) {
            this.OUTPUT2 = event.target.value;
        }
    }
}).mount('#assignment')