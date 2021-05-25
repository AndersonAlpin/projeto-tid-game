<template>
  <div class="header-game">
    <nav class="navbar m-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <button class="btn btn-warning">Desistir</button>
        </a>
        <div id="questao">
          Coloque sua pergunta aqui!
        </div>
        <div id="pontuacao" class="navbar-brand">
          PONTUAÇÃO: <span class="pontos">1</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderGame",
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
  padding: 5px;
  border-bottom: 1px solid #ffffff;
}

div#questao {
  margin-top: -18px;
  width: 900px;

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