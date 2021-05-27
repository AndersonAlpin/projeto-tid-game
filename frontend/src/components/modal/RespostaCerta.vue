<template>
  <div v-if="respostaCerta" id="modal-resultado" class="modal-container">
    <div class="modal-box">
      <img src="@/assets/images/fundo-superior.png" class="fundo-superior" />
      <img src="@/assets/images/fundo-inferior.png" class="fundo-inferior" />
      <img src="@/assets/images/hommer.gif" class="boneco" />
      <span class="title">Parabéns!!</span>
      <span class="subtitle">Você acertou!</span>

      <div class="button-group">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento.js"

export default {
  data() {
    return {
      respostaCerta: false,
    }
  },
  created() {
    barramento.quandoRespostaCerta(result => {
      this.respostaCerta = result;
    })

    barramento.quandoPularQuestao(index => {
      if(index) this.respostaCerta = false;
    })
  }
};
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

.fundo-superior {
  position: absolute;
  width: 320px;
  height: 371px;
  top: -70px;
}

.fundo-inferior {
  position: absolute;
  width: 270px;
  height: 371px;
  top: 20px;
}

.boneco {
  position: absolute;
  width: 250px;
  top: 95px;
}

.title {
  position: absolute;
  top: 250px;

  font-size: 45px;
  text-transform: uppercase;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ffffff;
  color: #5f07ff;
}

.subtitle {
  position: absolute;
  top: 300px;
  font-size: 24px;
  text-transform: uppercase;
}

.button-group {
  position: absolute;
  top: 370px;
}

.button-group button {
  width: 136px;
  height: 35px;
  font-size: 11px;
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