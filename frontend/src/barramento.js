import Vue from 'vue'
export default new Vue({
  methods: {
    pularQuestao(index) {
      this.$emit('pularQuestao', index)
    },
    quandoPularQuestao(callback) {
      this.$on('pularQuestao', callback)
    },

    jogar() {
      this.$emit('jogar', 0)
    },
    quandoJogar(callback) {
      this.$on('jogar', callback)
    }
  }
})