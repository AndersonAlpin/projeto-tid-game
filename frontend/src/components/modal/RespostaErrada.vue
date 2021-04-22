<template>
  <div id="modal-resultado" class="modal-container">
    <div class="modal-box">
      <img src="@/assets/images/carinha-choro.png" class="carinha-1" />
      <img src="@/assets/images/carinha-choro.png" class="carinha-2" />
      <img src="@/assets/images/carinha-choro.png" class="carinha-3" />
      <img src="@/assets/images/carinha-choro.png" class="carinha-4" />
      <img src="@/assets/images/boneco-chorando.png" class="boneco" />
      <span class="title">Você errou!</span>

      <div class="button-group">
        <button class="btn button-sair">SAIR</button>
        <button class="btn button-proximo">TENTAR NOVAMENTE</button>
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
  bottom: 0;
  left: 0;
  z-index: 2000;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  position: absolute;
  background: #5f07ff;
  width: 350px;
  height: 450px;
  border-radius: 41px;

  display: flex;
  justify-content: center;
}

.boneco {
  position: absolute;
  width: 250px;
  top: 30px;
}

.carinha-1 {
  position: absolute;
  width: 40px;
  right: 80px;
  top: 90px;
}

.carinha-2 {
  position: absolute;
  width: 40px;
  left: 75px;
  top: 160px;
}

.carinha-3 {
  position: absolute;
  width: 40px;
  right: 60px;
  bottom: 150px;
}

.carinha-4 {
  position: absolute;
  width: 40px;
  bottom: 15px;
}

.title {
  position: absolute;
  top: 260px;
  font-size: 24px;
  text-transform: uppercase;
}

.button-group {
  position: absolute;
  top: 330px;
}

.button-group button {
  width: 136px;
  height: 35px;
  font-size: 11px;
  margin: 5px;
  border-radius: 12px;
  color: #fff;
  text-transform: uppercase;
}

.button-sair {
  background: #FD3F3F;
}

.button-proximo {
  background: #11C891;
}
</style>