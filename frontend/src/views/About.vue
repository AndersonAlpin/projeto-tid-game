<template>
  <div id="about">
    <Navbar />
    <div class="title">SOBRE O JOGO</div>

    <div class="texto">
      <p>
        O fulcro do jogo é desafiar o usuário a testar seus conhecimentos
        através de telas estáticas que estão concomitantes ao tema escolhido. O
        usuário escolherá uma área de conhecimentos e a partir de cliques
        responderão questões clicando em imagens perdidas no cenário.
        <span>Exemplo: </span>
        Em um cenário onde o tema escolhido foi tecnologia. O desafio seria o
        usuário encontrar a peça responsável por armazenar o sistema e arquivos.
        <span>Desafio: </span>
        A cada vitoria o jogo vai aumentar a dificuldade de imagens perdidas no
        cenario, fazendo que o jogador tenha mais raciocínio lógico e provocando
        tambem ele aprender mais sobre o tema.
        <span>Recompensa: </span>
        A cada vitoria o jogo vai da pontos e vai subir de nivel, jogador tambem
        poderar ganhar dicas.
        <span>Regras: </span>
        o jogador so vai poder subir de nivel depois que atigir determinados pontos.
        <span>Recompensa: </span>
        O jogo vai narrar assuntos como tecnologia, saude etc..
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import barramento from "@/barramento";

export default {
  components: { Navbar },
  created() {
    barramento.abrirSobre();
  },
};
</script>

<style>
#about {
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  color: #fff;
  background-image: linear-gradient(
    129deg,
    rgba(71, 14, 174, 0.9),
    rgba(95, 7, 255, 0.9)
  );
}

div.title {
  color: #fff;
  padding-top: 3%;
}

.texto {
  width: 100vw;

  display: flex;
  justify-content: center;
}

p {
  width: 80%;
  font-size: 18px;
  text-align: justify;
}

.texto span {
  display: block;
  font-weight: 500;
  margin: 0.5% 0;
}
</style>