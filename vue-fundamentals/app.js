const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Jone',
      middleName : '',
      lastName: 'Doe',
      url : 'https://google.com',
      raw_url : '<a href="https://bing.com" target="_blank">Google</a>',
      age: 20,
    }
  },
  methods: {
    fullName() {
      return ` ${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()} `
    },
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
