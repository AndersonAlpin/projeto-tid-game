import Vue from 'vue';
export default new Vue({
  methods: {
    jogar() {
      this.$emit('jogar', true);
    },
    quandoJogar(callback) {
      this.$on('jogar', callback)
    }
  }
});