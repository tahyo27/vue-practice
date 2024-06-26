const app = Vue.createApp({
    data() {
        return {
            inputModel: '',
            isVisible: false,
            backValue: ''
        };
    },
    computed: {
        classInput() {
            return {
                user1: this.inputModel === 'user1',
                user2: this.inputModel === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        },
    },
    methods: {
        visibleCheck() {
            console.log(this.classInput);
            this.isVisible = !this.isVisible;
        }
    }



});

app.mount('#assignment');