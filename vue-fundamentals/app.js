const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Jone',
      middleName : '',
      lastName: 'Doe',
      url : 'https://google.com',
      raw_url : '<a href="https://bing.com" target="_blank">Google</a>',
      age: 20,
      isPurple: false,
      textColor: ''
    }
  },
  methods: {
    increament() {
      this.age++;
    },
    updateLastName(msg, e) {
      console.log(msg);
      this.lastName = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    }
  },
  computed: {
    fullName() {
      return ` ${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()} `
    },
    bgPurple() {
      return {
        purple: this.isPurple
      }
    }
  },
  watch: {
    age(newval, oldval) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    }
  }
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = 'Bob';
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jone',
//       lastName: 'Doe'
//     }
//   }
// }).mount('#app2');
