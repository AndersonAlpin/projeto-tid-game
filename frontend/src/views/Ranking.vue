<template>
  <div id="ranking">
    <Navbar />
    <div class="title">RANKING</div>
    <div class="imagem">
      <div class="placar">
        <b-image :src="require('@/assets/icons/placar.png')"></b-image>
        <div class="posicao">1º</div>
        <div class="nick">NICK DO JOGADOR</div>
        <div class="pontos">3000</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
#ranking {
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  color: #000;
}

div.title {
  color: #470eae;
  padding-top: 3%;
}

.imagem {
  width: 100vw;
  margin-top: 3%;
  display: flex;
  justify-content: center;
}

.placar {
  position: relative;
  width: 50%;
}

.posicao {
  position: absolute;
  width: 10%;
  top: 30%;
  left: 5%;

  font-size: 38px;
  font-weight: 700;
  color: #11c891;
}

.nick {
  position: absolute;
  top: 34%;
  left: 35%;

  font-size: 22px;
  font-weight: 700;
  color: #470eae;
  border-bottom: 2px solid #470eae;
  text-transform: uppercase;
}

.pontos {
  position: absolute;
  font-weight: 700;
  top: 40%;
  left: 81.5%;

  font-size: 30px;
  font-weight: 700;
  color: #11c891;
}

/* Media Screen */
@media screen and (max-device-width: 700px) {
  .placar {
    width: 80%;
  }
}
</style>