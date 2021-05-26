<template>
    <div class="container">
      <template >
        <div id="box">
          <!-- Cenário -->
          <img id="cenario" class="cenario" src="@/assets/cenarios/cenario1.png">

          <!-- Alternativas -->
          <img class="opcoes" id="opcao-1" src="@/assets/cenarios/carregadorPortatil.png">
          <img class="opcoes" id="opcao-2" src="@/assets/cenarios/carregadorNotebook.png">
          <img class="opcoes" id="opcao-3" src="@/assets/cenarios/carregadorCelular.png">
        </div>
      </template>
  </div>
</template>

<script>
export default {
  methods: {
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
  width: 300px;
  left: 80px;
  bottom: 20px;
}

img#opcao-1:hover{
  width: 310px;
}

img#opcao-2{
  position: absolute;
  width: 200px;
  right: 110px;
  bottom: 150px;
}

img#opcao-2:hover{
  width: 210px;
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