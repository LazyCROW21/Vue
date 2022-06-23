const {
    createApp
} = Vue

createApp({
    data() {
        return {
            inp1: '',
            inpColor: '',
            visible: true
        }
    },
    methods: {
        toggleP() {
            this.visible = !this.visible;
        }
    },
    computed: {
        p1Class() {
            return {
                user1: this.inp1 === 'user1',
                user2: this.inp1 === 'user2'
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