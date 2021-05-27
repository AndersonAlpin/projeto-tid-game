<template>
  <div id="register">
    <div class="box">
      <div class="logo">
        <img src="@/assets/images/logo-2.png" alt="SUBLIME GAMING" />
      </div>

      <form class="form">
        <input v-model.lazy.trim="email" type="email" placeholder="E-MAIL" />
        <input v-model="senha" type="password" placeholder="SENHA" />

        <div class="button-group">
          <button @click="login" class="btn button-entrar">ENTRAR</button>
          <button @click="cadastro" class="btn button-cadastrar">
            CRIAR CADASTRO
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "sublime@gmail.com",
      senha: "12345",
    };
  },
  methods: {
    login() {
      if (this.email && this.senha) {
        if (this.email == "sublime@gmail.com" && this.senha == "12345") {
          this.$router.push({ name: "Menu" });
        }
      }
    },
    cadastro() {
      this.$router.push({ name: "Register" });
    },
  },
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
  top: 70px;
  left: 75px;
}

.form {
  position: absolute;
  top: 160px;
  left: 37px;
}

.form input {
  width: 275px;
  height: 45px;
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
}

.button-entrar {
  width: 200px;
  height: 35px;
  left: 37px;

  font-size: 15px;
  background: #11c891;
}

.button-cadastrar {
  width: 150px;
  height: 25px;
  margin-top: 42px;
  left: 60px;

  font-size: 12px;
  line-height: 12px;
  background: #fd3f3f;
}
</style>