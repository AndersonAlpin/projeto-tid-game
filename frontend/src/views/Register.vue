<template>
  <div id="register">
     
    <div class="box">
      <div class="logo">
        <img src="@/assets/images/logo-2.png" alt="SUBLIME GAMING" />
      </div>

      <form class="form">
        <input type="text" placeholder="NICK" />
        <input type="email" placeholder="E-MAIL" />
        <input type="password" placeholder="SENHA" />
        <input type="password" placeholder="CONFIRMAR SENHA" />

        <div class="button-group">
          <button @click="cadastro" class="btn button-cadastrar">CADASTRAR</button>
          <button @click="login" class="btn button-login">JÁ TENHO CONTA</button>
        </div>
      </form>
    </div>

   
  </div>
</template>

<script>
export default {
  methods: {
    cadastro() {
      this.$router.push({ name: "Login" });
    },
    login() {
      this.$router.push({ name: "Login" });
    },
  }
};
</script>

<style scoped>
#register {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

.logo {
  position: absolute;
  top: 40px;
  left: 75px;
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
  color: #FFFFFF;
}

.button-cadastrar {
  width: 200px;
  height: 35px;
  left: 37px;

  font-size: 15px;
  background: #fd3f3f;
}

.button-login {
  width: 150px;
  height: 25px;
  margin-top: 42px;
  left: 60px;

  font-size: 12px;
  line-height: 12px;
  background: #11C891;
  
}
</style>