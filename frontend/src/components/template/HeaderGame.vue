<template>
  <div class="header-game">
    <RespostaCerta>
      <button @click="sair" class="btn button-sair">SAIR</button>
      <button @click="proximo((index += 1))" class="btn button-proximo">
        IR PARA PRÓXIMA
      </button>
    </RespostaCerta>
    <RespostaErrada>
      <button @click="sair" class="btn button-sair">SAIR</button>
      <button @click="tentarNovamente" class="btn button-proximo">
        TENTAR NOVAMENTE
      </button>
    </RespostaErrada>
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
import RespostaCerta from "@/components/modal/RespostaCerta.vue";
import RespostaErrada from "@/components/modal/RespostaErrada.vue";

export default {
  components: { RespostaCerta, RespostaErrada },
  data() {
    return {
      index: 0,
      pontos: 0,
      questoes: [
        {
          questao: "QUAL  DISPOSITIVO  DESCARREGA MAIS RAPIDO?",
        },
        {
          questao: "Clique no dispositívo que consegue controlar o computador.",
        },
        {
          questao:
            "Você acaba de comprar um notebook, qual  desses dispositivos serve para carregar seu notebook?",
        },
      ],
    };
  },
  methods: {
    pular(index) {
      barramento.pularQuestao(index);
      this.index = index;
    },
    desistir() {
      this.$router.push({ name: "MenuCategorias" });
    },
    sair() {
      this.$router.push({ name: "MenuCategorias" });
    },
    proximo(index) {
      barramento.pularQuestao(index);
    },
    tentarNovamente() {
      barramento.tentarNovamente();
    },
  },
  created() {
    barramento.quandoPularQuestao((index) => {
      if (this.index < 3) {
        this.index = index;
      } else {
        this.$router.push({ name: "MenuCategorias" });
      }
    });

    barramento.quandoRespostaCerta((result) => {
      if (result) this.pontos += 30;
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