<template>
  <div class="header-game">
    <nav class="navbar m-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <button @click="desistir" class="btn btn-warning m-1">
            Desistir
          </button>
          <button @click="pular((index += 1))" class="btn btn-info">
            Pular
          </button>
        </a>
        <div id="questao">
          {{ questoes[index].questao }}
        </div>
        <div id="pontuacao">
          PONTUAÇÃO: <span class="pontos">{{ pontos }}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  data() {
    return {
      index: 0,
      pontos: 0,
      questoes: [
        {
          questao:
            "Você acaba de comprar um notebook, qual  desses dispositivos serve para carregar seu notebook?",
        },
        {
          questao: "Clique no dispositívo que consegue controlar o computador.",
        },
      ],
    };
  },
  methods: {
    pular(index) {
      if (this.index.lenght < 3) {
        barramento.pularQuestao(index);
        this.index = index;
      }
    },
    desistir() {
      this.$router.push({ name: "MenuCategorias" });
    },
  },
  created() {
    barramento.quandoPularQuestao((index) => {
      this.index = index;
    });
  },
};
</script>

<style scoped>
.header-game {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #5f07ff;
  width: 100%;
  height: 90px;
}

#pontuacao {
  text-align: center;
  width: 170px;
  padding: 5px;
  border-bottom: 2px solid #ffffff;
}

.pontos {
  font-size: 1.1rem;
}

div#questao {
  margin-top: -15px;
  width: 850px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #470eae;
  background-color: #ffffff;
  border-radius: 22px;
}

@media screen and (max-width: 380px) {
  .redes-sociais {
    display: none;
  }
}
</style>