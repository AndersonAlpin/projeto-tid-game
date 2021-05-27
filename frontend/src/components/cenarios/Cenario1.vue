<template>
    <div class="container">
      <template v-if="index == 0" >
        <div id="box">
          <!-- Cenário -->
          <img id="cenario" class="cenario" src="@/assets/cenarios/cenario1.png">

          <!-- Alternativas -->
          <img @click="respostaErrada" class="opcoes" id="opcao-1" src="@/assets/cenarios/joy-play3.png">
          <img @click="respostaErrada" class="opcoes" id="opcao-2" src="@/assets/cenarios/joy-xbox.png">
          <img @click="respostaCerta" class="opcoes" id="opcao-3" src="@/assets/cenarios/iphone.png">
        </div>
      </template>
  </div>
</template>

<script>
import barramento from "@/barramento.js"

export default {
  data() {
    return {
      index: 0
    }
  },
  methods: {
    respostaCerta(){
      barramento.respostaCerta();
    },
    respostaErrada() {
      barramento.respostaErrada();
    }
  },
  created(){
    barramento.quandoPularQuestao(index => {
      this.index = index;
    })
  }
}
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

img#opcao-1{
  position: absolute;
  width: 200px;
  left: 200px;
  bottom: 0px;
}

img#opcao-1:hover{
  width: 210px;
}

img#opcao-2{
  position: absolute;
  width: 180px;
  right: 300px;
  bottom: 0px;
}

img#opcao-2:hover{
  width: 190px;
}

img#opcao-3{
  position: absolute;
  width: 150px;
  right: 130px;
  bottom: 10px;
}

img#opcao-3:hover{
  width: 160px;
}

img.opcoes:hover{
  cursor: pointer;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}

</style>