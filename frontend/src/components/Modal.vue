<template>
  <b-modal
    title="modal-delete"
    v-model="isModalActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Example Modal"
    aria-modal
  >
    <template>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p v-if="respostaCerta" class="modal-card-title">Resposta certa</p>
          <p v-else class="modal-card-title">Resposta Errada</p>
        </header>
        <section v-if="respostaCerta" class="modal-card-body">
          <b-image :src="require('@/assets/icons/feliz.gif')"></b-image>
        </section>
        <section v-else class="modal-card-body">
          <div class="image-triste">
            <b-image :src="require('@/assets/icons/triste.png')"></b-image>
          </div>
        </section>
        <footer id="mensagem" class="modal-card-foot">
          <p>Aqui ficará a justificativa da resposta.</p>
        </footer>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: ["isModalActive", "respostaCerta", "mensagem"],
  data() {
    return {
      // respostaCerta: false,
      // isModalActive: false,
    };
  },
};
</script>

<style scoped>
#mensagem p {
  width: 200px;
  text-align: justify;
}

.image-triste {
  width: 200px;
}
</style>