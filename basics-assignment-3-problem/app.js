const app = Vue.createApp({

    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counterCheck() {
            const that = this;
            console.log("counterCheck.....")
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    },
    computed: {
        counterCheck() {
            console.log(this.counter);
            if(this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return 'Too much!';
            }
        }
    }
    ,
    methods: {
        addFive() {
            this.counter += 5;
        },
        addOne() {
            this.counter += 1;
        }
    }

});

app.mount('#assignment');