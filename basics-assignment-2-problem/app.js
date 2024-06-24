const app = Vue.createApp({
    data() {
        return {
            upInput: '',
            downInput: ''
        }
    },
    methods: {
        btnAlert() {
            alert('Btn Alert!');
        },
        setUpInput(event) {
            this.upInput = event.target.value;
        },
        setDownInput(event) {
            this.downInput = event.target.value;
        }
        

    }
});

app.mount('#assignment');
