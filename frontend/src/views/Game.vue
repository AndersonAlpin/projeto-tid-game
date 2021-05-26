<template>
  <div id="game">
    <HeaderGame>
      <button class="btn btn-warning me-1">Desistir</button>
      <button class="btn btn-info">Pular</button>
    </HeaderGame>
    <Cenario3 />
  </div>
</template>

<script>
import Cenario3 from "@/components/cenarios/Cenario3.vue";
import HeaderGame from "@/components/template/HeaderGame.vue";

export default {
  components: {
    Cenario3,
    HeaderGame,
  },
};
</script>

<style scoped>
</style>