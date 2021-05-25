<template>
  <div id="register">
    <div class="box">
      <div class="bem-vindo">
        <span>Bem Vindo!</span>
      </div>
      <span class="linha-horinzontal"></span>

      <div class="form">
        <div class="button-group">
          <button class="btn jogar">JOGAR</button>
          <button class="btn ranking">RANKING</button>
          <button class="btn sobre">SOBRE O JOGO</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#register {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.box {
  position: relative;
  width: 350px;
  height: 450px;
  border-radius: 41px;
  background-color: #5f07ff;

  display: flex;
  justify-content: center;
}

.bem-vindo {
  position: absolute;
  text-align: center;
  font-size: 35px;
  top: 80px;
}

.linha-horinzontal {
  position: absolute;
  top: 130px;
  width: 140px;
  height: 3px;
  background-color: #ffffff;
}

.form {
  position: absolute;
  top: 125px;
  left: 37px;
}

.form input {
  width: 275px;
  height: 35px;
  margin: 3px 0;
  padding: 10px;

  background-color: #f0e4e4;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
}

.button-group {
  width: 200px;
  margin-top: 20px;
}

.button-group button {
  position: absolute;
  border-radius: 10px;
  color: #ffffff;
  width: 270px;
  height: 50px;
  font-size: 15px;
}

button.jogar {
  top: 80px;
  background: #11C891;
}

button.ranking {
  top: 140px;
  background: #FD3F3F;
}

button.sobre {
  top: 200px;
  border: 3px solid #470EAE;
}
</style>