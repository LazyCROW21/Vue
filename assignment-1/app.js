function doThis() {
    console.log('Did that');
}

const {
    createApp
} = Vue

createApp({
    data() {
        return {
            MY_NAME: 'Hardik',
            MY_AGE: 21,
            message: 'Hello Vue!',
            IMG_URL: 'https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?w=400'
        }
    },
    methods: {
        ageIn5() {
            return this.MY_AGE + 5;
        }
    }
}).mount('#assignment')