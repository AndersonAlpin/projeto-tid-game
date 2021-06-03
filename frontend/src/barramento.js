import Vue from 'vue';
export default new Vue({
  methods: {
    jogar() {
      this.$emit('jogar', true);
    },
    quandoJogar(callback) {
      this.$on('jogar', callback)
    },

    abrirSobre() {
      this.$emit('abrirSobre', false);
    },
    quandoAbrirSobre(callback) {
      this.$on('abrirSobre', callback)
    },

    sairSobre() {
      this.$emit('sairSobre', true);
    },
    quandoSairSobre(callback) {
      this.$on('sairSobre', callback)
    },
  }
});