const app = Vue.createApp({
    data() {
        return {
            myNameIs: 'John Kim',
            myAgeIs: '32',
            imgSrc: 'https://s1.zerochan.net/Psyduck.600.4017078.jpg'
        }
    },
    methods: {
        calcAge() {
            return parseInt(this.myAgeIs) + 5;
        },
        randomNumber() {
            const num = Math.random();
            if(num < 0.5) {
                return 0;
            } else {
                return 1;
            }
        }
    }
});

app.mount('#assignment');