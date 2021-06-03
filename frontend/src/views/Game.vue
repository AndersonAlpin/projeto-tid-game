<template>
  <div>
    <NavbarGame />
    <Cenario />
    <Modal />
  </div>
</template>

<script>
import NavbarGame from "@/components/NavbarGame.vue";
import Cenario from "@/components/Cenario.vue";
import Modal from "@/components/Modal.vue";

import barramento from "@/barramento";

export default {
  components: { NavbarGame, Cenario, Modal },
  created() {
    barramento.abrirSobre();
  }
};
</script>

<style>
</style>