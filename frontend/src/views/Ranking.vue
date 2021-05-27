<template>
  <div id="ranking">
    <span class="title">Ranking</span>
    <div class="placar">
      <div class="jogador">
        <div class="posicao">1º</div>
        <div class="divisao-vertical"></div>
        <div class="user-img"><img src="@/assets/images/user.png" /></div>
        <div class="nick">Sublime Gaming</div>
        <div class="divisao-horizontal"></div>
        <div class="tema">Área Tecnológica</div>
        <div class="divisao-vertical-2"></div>
        <div class="pontos">Pontos</div>
        <div class="pontuacao">99</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#ranking {
  text-align: center;
  text-transform: uppercase;
}

.title {
  font-size: 35px;
}

.placar {
  display: flex;
  margin-top: 40px;
  justify-content: center;
}

.jogador {
  position: relative;
  width: 756px;
  height: 129px;

  background-color: #e4dada;
  box-shadow: 0px 3px 16px 2px rgba(228, 43, 43, 0.15);
  border-radius: 7px;

  display: flex;
  align-items: center;
}

.posicao {
  margin-left: 50px;
  font-size: 50px;
  color: #11c891;
}

.divisao-vertical {
  position: absolute;
  width: 3px;
  height: 90px;
  left: 140px;
  background: #575050;
}

.divisao-vertical-2 {
  position: absolute;
  width: 3px;
  height: 90px;
  right: 160px;
  background: #575050;
}

.user-img {
  margin-left: 70px;
}

.nick {
  font-size: 20px;
  margin-left: 15px;
  margin-top: -30px;
  color: #470eae;
}

.divisao-horizontal {
  position: absolute;
  left: 295px;
  width: 230px;
  height: 2px;

  background: #5f07ff;
}

.tema {
  position: absolute;
  left: 295px;
  margin-top: 35px;
  font-size: 20px;
  color: #fd3f3f;
}

.pontos {
  position: absolute;
  margin-top: -40px;
  right: 45px;
  font-size: 20px;
  color: #fd3f3f;
}

.pontuacao {
  position: absolute;
  margin-top: 20px;
  right: 65px;
  font-size: 35px;
  color: #11c891;
}
</style>