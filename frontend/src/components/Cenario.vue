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
      <b-image :src="require('@/assets/images/cenario3.png')"></b-image>

      <!-- IMAGENS ALTERNATIVAS -->
      <div @click="teste" class="alternativa-1 alternativas">
        <b-image
          :src="require('@/assets/images/carregadorCelular.png')"
        ></b-image>
      </div>
      <div @click="teste" class="alternativa-2 alternativas">
        <b-image
          :src="require('@/assets/images/carregadorNotebook.png')"
        ></b-image>
      </div>
      <div @click="teste" class="alternativa-3 alternativas">
        <b-image
          :src="require(`@/assets/images/carregadorPortatil.png`)"
        ></b-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alternativa3: "iphone.png",
      cenarios: [
        {
          // Alternativa 1
          src: "cenario1.png",
          questao:
            "Você acaba de comprar um notebook, qual desses dispositivos serve para carregar o seu notebook?",
          a1: {
            src: "joy-play3.png",
            width: "16%",
            bottom: "0%",
            right: "0%",
          },
          a2: {
            src: "joy-xbox.png",
            width: "16%",
            bottom: "0%",
            right: "10%",
          },
          a3: {
            src: "iphone.png",
            width: "16%",
            bottom: "0%",
            right: "30%",
          },
        },
        {
          // Alternativa 2
          src: "cenario2.png",
          questao: "Clique no DISPOSITIVO que consegue controlar o computador",
          a1: {
            src: "controle.png",
            width: "19%",
            bottom: "0%",
            right: "65%",
          },
          a2: {
            src: "mouse.png",
            width: "20%",
            bottom: "5%",
            right: "25%",
          },
          a3: {
            src: "chave.png",
            width: "10%",
            bottom: "25%",
            right: "40%",
          },
        },
        {
          // Alternativa 3
          src: "cenario2.png",
          questao:
            "Você acaba de comprar um notebook, qual  desses dispositivos serve para carregar seu notebook?",
          a1: {
            src: "carregadorCelular.png",
            width: "15%",
            bottom: "0%",
            right: "7%",
          },
          a2: {
            src: "carregadorNotebook.png",
            width: "17%",
            bottom: "0%",
            right: "76%",
          },
          a3: {
            src: "carregadorPortatil.png",
            width: "16%",
            bottom: "22%",
            right: "70%",
          },
        },
      ],
    };
  },
  methods: {
    teste() {
      console.log("Perfect");
    },
  },
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
}

/* ALTERNATIVA 1 */
.alternativa-1 {
  width: 15%;
  bottom: 0;
  right: 7%;
}

.alternativa-1:hover {
  width: 16%;
}

/* ALTERNATINA 2 */
.alternativa-2 {
  width: 17%;
  bottom: 0%;
  right: 76%;
}

.alternativa-2:hover {
  width: 18%;
}

/* ALTERNATIVA 3 */
.alternativa-3 {
  width: 16%;
  bottom: 22%;
  right: 70%;
}

.alternativa-3:hover {
  width: 17%;
}

/* Media Screen */
@media screen and (max-device-width: 500px) {
  .questao {
    font-size: 18px;
  }
}
</style>