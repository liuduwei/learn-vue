const vm = Vue.createApp({
  data() {
    return {
      perspective : 100,
      rotateX : 0,
      rotateY : 0,
      rotateZ : 0
    }
  },

  methods: {
    reset() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.perspective = 100;
    },
    async copy() {
      let text = `transform: ${this.boxStyles.transform};`;
      await navigator.clipboard.writeText(text);

      console.log('css copyed');
    }
  },

  computed : {
    boxStyles() {
      return {transform : `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`}
    }
  }
}).mount('#app');
