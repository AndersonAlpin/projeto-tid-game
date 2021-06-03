<template>
  <div id="cenario">
    <div class="questao">
      <p>
        {{ cenarios[index].questao }}
      </p>
    </div>

    <div id="box">
      <!-- IMAGEM CENÁRIO -->
      <b-image
        :src="require(`@/assets/images/${cenarios[index].src}`)"
      ></b-image>

      <!-- IMAGENS ALTERNATIVAS -->
      <div
        @click="teste"
        class="alternativas"
        :style="`
          width: ${cenarios[index].a1.width}%; 
          bottom: ${cenarios[index].a1.bottom}%; 
          right: ${cenarios[index].a1.right}%;`"
      >
        <b-image
          :src="require(`@/assets/images/${cenarios[index].a1.src}`)"
        ></b-image>
      </div>

      <div
        @click="teste"
        class="alternativas"
        :style="`
          width: ${cenarios[index].a2.width}%; 
          bottom: ${cenarios[index].a2.bottom}%; 
          right: ${cenarios[index].a2.right}%;`"
      >
        <b-image
          :src="require(`@/assets/images/${cenarios[index].a2.src}`)"
        ></b-image>
      </div>

      <div
        @click="teste"
        class="alternativas"
        :style="`
          width: ${cenarios[index].a3.width}%; 
          bottom: ${cenarios[index].a3.bottom}%; 
          right: ${cenarios[index].a3.right}%;`"
      >
        <b-image
          :src="require(`@/assets/images/${cenarios[index].a3.src}`)"
        ></b-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      cenarios: [
        {
          // Alternativa 1
          src: "cenario1.png",
          questao:
            "Qual dispositivo descarrega mais rápido?",
          a1: {
            src: "joy-play3.png",
            width: 16,
            bottom: 0,
            right: 70,
          },
          a2: {
            src: "joy-xbox.png",
            width: 16,
            bottom: 0,
            right: 10,
          },
          a3: {
            src: "iphone.png",
            width: 16,
            bottom: 0,
            right: 30,
          },
        },
        {
          // Alternativa 2
          src: "cenario2.png",
          questao: "Clique no dispositivo que consegue controlar o computador.",
          a1: {
            src: "controle.png",
            width: 19,
            bottom: 0,
            right: 65,
          },
          a2: {
            src: "mouse.png",
            width: 20,
            bottom: 5,
            right: 25,
          },
          a3: {
            src: "chave.png",
            width: 10,
            bottom: 25,
            right: 40,
          },
        },
        {
          // Alternativa 3
          src: "cenario3.png",
          questao:
            "Você acaba de comprar um notebook, qual  desses dispositivos serve para carregar seu notebook?",
          a1: {
            src: "carregadorCelular.png",
            width: 15,
            bottom: 0,
            right: 7,
          },
          a2: {
            src: "carregadorNotebook.png",
            width: 17,
            bottom: 0,
            right: 76,
          },
          a3: {
            src: "carregadorPortatil.png",
            width: 16,
            bottom: 22,
            right: 70,
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

/* Media Screen */
@media screen and (max-device-width: 500px) {
  .questao {
    font-size: 18px;
  }
}
</style>