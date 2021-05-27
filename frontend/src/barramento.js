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
    },

    respostaCerta() {
      this.$emit('respostaCerta', true)
    },
    quandoRespostaCerta(callback) {
      this.$on('respostaCerta', callback)
    },

    respostaErrada() {
      this.$emit('respostaErrada', true)
    },
    quandoRespostaErrada(callback) {
      this.$on('respostaErrada', callback)
    },

    tentarNovamente() {
      this.$emit('tentarNovamente', false)
    },
    quandoTentarNovamente(callback) {
      this.$on('tentarNovamente', callback)
    }
  }
})