<template>
  <div id="modal-resultado" class="modal-container">
    <div class="modal-box">
      <img src="@/assets/images/fundo-superior.png" class="fundo-superior" />
      <img src="@/assets/images/fundo-inferior.png" class="fundo-inferior" />
      <img src="@/assets/images/boneco.png" class="boneco" />
      <span class="title">Parabéns!!</span>
      <span class="subtitle">Você acertou!</span>

      <div class="button-group">
        <button class="btn button-sair">SAIR</button>
        <button class="btn button-proximo">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  min-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: #5f07ff;
  width: 350px;
  height: 500px;
  border-radius: 41px;

  display: flex;
  justify-content: center;
}

.fundo-superior {
  position: absolute;
  width: 320px;
  height: 371px;
  top: 30px;
}

.fundo-inferior {
  position: absolute;
  width: 270px;
  height: 371px;
  top: 100px;
}

.boneco {
  position: absolute;
  width: 250px;
  top: 175px;
}

.title {
  position: absolute;
  top: 325px;

  font-size: 45px;
  text-transform: uppercase;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ffffff;
  color: #5f07ff;
}

.subtitle {
  position: absolute;
  top: 375px;
  font-size: 24px;
  text-transform: uppercase;
}

.button-group {
  position: absolute;
  top: 450px;
}

.button-group button {
  width: 130px;
  height: 35px;
  font-size: 12px;
  margin: 5px;
  border-radius: 12px;
  text-transform: uppercase;
}

.button-sair {
  background: #FD3F3F;
}

.button-proximo {
  background: #11C891;
}
</style>