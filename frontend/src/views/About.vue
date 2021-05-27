<template>
  <div class="container" id="sobre">
    <div class="row">
      <div id="titulo" class="col-12 col-sm-12"><h2>Sobre</h2></div>
      <div class="col-12 col-sm-12">
        <div id="texto">
          <p>
            O fulcro do jogo é desafiar o usuário a testar seus conhecimentos
            através de telas estáticas que estão concomitantes ao tema
            escolhido. O usuário escolherá uma área de conhecimentos e a partir
            de cliques responderão questões clicando em imagens perdidas no
            cenário.
          </p>
          <p>Exemplo:</p>
          <p>
            Em um cenário onde o tema escolhido foi tecnologia. O desafio seria
            o usuário encontrar a peça responsável por armazenar o sistema e
            arquivos.
          </p>
          <p>Desafio:</p>
          <p>
            A cada vitoria o jogo vai aumentar a dificuldade de imagens perdidas
            no cenario, fazendo que o jogador tenha mais raciocínio lógico e
            provocando tambem ele aprender mais sobre o tema.
          </p>
          <p>Recompesa :</p>
          <p>
            A cada vitoria o jogo vai da pontos e vai subir de nivel, jogador
            tambem poderar ganhar dicas.
          </p>
          <p>Regras:</p>
          <p>
            o jogador so vai poder subir de nivel depois que atigir determinados
            pontos.
          </p>
          <p>Narrativa:</p>
          <p>O jogo vai narrar assuntos como tecnologia, saude etc..</p>
        </div>
        <div class="botao">
          <button @click="jogar" id="botao" class="btn">Jogar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jogar() {
      this.$router.push({ name: "MenuCategorias" });
    },
  },
};
</script>


<style scoped>
#titulo {
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
}

#texto {
  width: 100%;
  margin-top: 20px;
  line-height: 22px;
  text-align: justify;
  color: rgb(255, 255, 255);
}

.botao {
  text-align: center;
}

.botao button {
  width: 150px;
  background: #11c891;
}
</style>