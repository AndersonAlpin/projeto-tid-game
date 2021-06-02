<template>
  <div id="cenario">
    <div class="questao">
      <p>
        Você acaba de comprar um notebook, qual desses dispositivos serve para
        carregar o seu notebook?
      </p>
    </div>

    <div id="box">
      <!-- IMAGEM CENÁRIO -->
        <b-image :src="require('@/assets/images/cenario1.png')"></b-image>

      <!-- IMAGENS ALTERNATIVAS -->
      <div @click="teste" class="alternativa-1 alternativas">
        <b-image :src="require('@/assets/images/joy-play3.png')"></b-image>
      </div>
      <div @click="teste" class="alternativa-2 alternativas">
        <b-image :src="require('@/assets/images/joy-xbox.png')"></b-image>
      </div>
      <div @click="teste" class="alternativa-3 alternativas">
        <b-image :src="require(`@/assets/images/${alternativa3}`)"></b-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alternativa3: 'iphone.png',
    }
  },
  methods: {
    teste(){
      console.log('Perfect');
    }
  }
};
</script>

<style scoped>
/* FORMATAÇÃO DO CONTAINER */
#cenario {
  min-height: 100vh;
  background-color: #3a3838;
  border-top: 1px groove #fff;

  display: flex;
  flex-direction: column;
}

/* FORMATAÇÃO DA DIV DE QUESTÃO */
.questao {
  padding: 15px;
  margin: 10px 30px;
  overflow: hidden;

  font-size: 25px;
  color: #470eae;
  background: #ffffff;
  border-radius: 22px;

  box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.15);
}

/* ANIMAÇÕES DE TEXTO NA DIV QUESTÃO */
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

/* LOCAL ONDE FICARÁ O CENÁRIO E AS ALTERNATIVAS */
#box {
  position: relative;
}

.alternativas {
  position: absolute;
  width: 17%;
}

.alternativas:hover {
  width: 18%;
}

/* ALTERNATIVA 1 */
.alternativa-1{
  bottom: 0;
  right: 65%;
}

/* ALTERNATINA 2 */
.alternativa-2{
  bottom: 0;
  right: 10%;
}

/* ALTERNATIVA 3 */
.alternativa-3{
  bottom: 0px;
  right: 30%;
}

/* Media Screen */
@media screen and (max-device-width: 500px) {
	.questao {
		font-size: 18px;
	}
}
</style>