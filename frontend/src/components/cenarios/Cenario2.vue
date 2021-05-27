<template>
  <div class="container">
    <template v-if="index == 1">
      <div id="box">
        <!-- Cenário -->
        <img class="cenario" src="@/assets/cenarios/cenario2.png" />

        <!-- Alternativas -->
        <img @click="respostaErrada" class="opcoes" id="opcao-1" src="@/assets/cenarios/controle.png" />
        <img @click="respostaCerta" class="opcoes" id="opcao-2" src="@/assets/cenarios/mouse.png" />
        <img
          @click="respostaErrada"
          class="opcoes"
          id="opcao-3"
          src="@/assets/cenarios/applewatch.png"
        />
      </div>
    </template>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    respostaCerta(){
      barramento.respostaCerta();
    },
    respostaErrada() {
      barramento.respostaErrada();
    }
  },
  created() {
    barramento.quandoPularQuestao((index) => {
      this.index = index;
    });
  },
};
</script>

<style scoped>
#box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#box img.cenario {
  margin-top: 25px;
  width: 90%;
  border: 5px solid rgb(61, 52, 52);
}

img#opcao-1 {
  position: absolute;
  width: 200px;
  left: 240px;
  bottom: -30px;
}

img#opcao-1:hover {
  width: 210px;
}

img#opcao-2 {
  position: absolute;
  width: 210px;
  right: 250px;
  bottom: 40px;
}

img#opcao-2:hover {
  width: 220px;
}

img#opcao-3 {
  position: absolute;
  width: 90px;
  left: 250px;
  bottom: 145px;
}

img#opcao-3:hover {
  width: 95px;
}

img.opcoes:hover {
  cursor: pointer;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
</style>