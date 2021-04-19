<template>
  <div class="container" id="sobre">
    <div class="row">
      
        <div id="titulo" class="col-12 col-sm-12"><h2>Sobre</h2></div>
          <div class="col-12 col-sm-12">
          <div id="texto">
         O fulcro do jogo é desafiar o usuário a testar seus conhecimentos através de telas estáticas que estão concomitantes ao tema escolhido.
         O usuário escolherá uma área de conhecimentos e a partir de cliques responderão questões clicando em imagens perdidas no cenário
         Exemplo:
         Em um cenário onde o tema escolhido foi tecnologia. O desafio seria o usuário encontrar a peça responsável por armazenar o sistema e arquivos.
         Desafio:
         A cada vitoria o jogo vai aumentar a dificuldade de imagens perdidas no cenario, fazendo que o jogador tenha mais raciocínio lógico e provocando tambem ele aprender mais sobre o tema.
         Recompesa :
         A cada vitoria o jogo vai da pontos e vai subir de nivel, jogador tambem poderar ganhar dicas.
         Regras:
         o jogador so vai poder subir de nivel depois que atigir determinados pontos.
         Narrativa:
         O jogo vai narrar assuntos como tecnologia, saude etc..
         <div id="button1">
          <a href="/menu.vue" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">jogar</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#titulo {
  color: rgb(255, 255, 255);
}
#texto {
  width: 100%;

  margin-top: 20px;

  font-family: "Avenir", "Roboto", Arial;
  text-align: justify;
  color: rgb(255, 255, 255);
}
#image {
  position: absolute;
  left: -50px;
  top: 120px;
}
#image2 {
  position: absolute;
  left: 100vh;
  top: 100px;
}

</style>