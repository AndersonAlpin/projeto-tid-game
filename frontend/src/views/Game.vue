<template>
  <div id="game">
    <HeaderGame />
    <Cenario />
  </div>
</template>

<script>
import Cenario from "@/components/cenarios/Cenario.vue";
import HeaderGame from "@/components/template/HeaderGame.vue";

export default {
  components: {
    Cenario,
    HeaderGame,
  },
};
</script>

<style scoped>
</style>