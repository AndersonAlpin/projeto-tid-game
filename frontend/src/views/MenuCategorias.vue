<template>
  <div id="register">
    <div class="box">
      <div class="bem-vindo">
        <span>Bem Vindo!</span>
      </div>

      <div class="tema">
        <span>QUAL TEMA DESEJA JOGAR?</span>
      </div>

      <div class="form">
        <div class="button-group">
          <button class="btn area-medica">ÁREA MÉDICA</button>
          <button class="btn area-tecnologica">ÁREA TECNOLÓGICA</button>
          <button class="btn area-historica">ÁREA HISTÓRICA</button>
          <button class="btn conhecimentos-basicos">CONHECIMENTOS BÁSICOS</button>
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
  top: 40px;

  border-bottom: 3px solid #fff;
}

.tema {
  position: absolute;
  text-align: center;
  font-size: 20px;
  top: 130px;
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
  background: #470EAE;
  width: 270px;
  height: 50px;
  font-size: 15px;
}

button:hover {
  color: #470EAE;
  background: #ffffff;
}

button.area-medica {
  top: 50px;
}

button.area-tecnologica {
  top: 110px;
}

button.area-historica {
  top: 170px;
}

button.conhecimentos-basicos {
  top: 230px;
}
</style>