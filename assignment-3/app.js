const {
    createApp
} = Vue

createApp({
    data() {
        return {
            RESULT: 0
        }
    },
    methods: {
        add(value) {
            this.RESULT += value;
        }
    },
    computed: {
        RESULT_MSG() {
            if(this.RESULT <= 37) {
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        RESULT(value) {
            setTimeout(() => {
                this.RESULT = 0;
            }, 5000);
        }
    }
}).mount('#assignment')