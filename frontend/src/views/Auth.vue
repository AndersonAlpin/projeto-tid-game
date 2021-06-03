<template>
  <div id="login" class="container is-fullhd">
    <div class="box">
      <!-- LOGO -->
      <div class="box-logo">
        <div class="logo">
          <b-image :src="require('@/assets/icons/logo-2.png')" />
        </div>
      </div>

      <!-- FORMULÁRIO -->
      <div class="form">
        <b-field>
          <b-input placeholder="Email" type="email" icon="email"> </b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Senha"
            type="password"
            icon="lock"
            password-reveal
          >
          </b-input>
        </b-field>

        <b-field>
          <b-input
            v-if="showCadastro"
            placeholder="Confirmar senha"
            type="password"
            icon="lock"
            password-reveal
          >
          </b-input>
        </b-field>

        <!-- BOTÕES -->
        <b-button
          @click="showCadastro = !showCadastro"
          v-if="showCadastro"
          class="button"
          type="is-success"
          expanded
          >CADASTRAR</b-button
        >
        <b-button
          @click="login"
          v-else
          class="button"
          type="is-success"
          expanded
          >ENTRAR</b-button
        >

        <!-- LINK -->
        <a class="link" href @click.prevent="showCadastro = !showCadastro">
          <span v-if="showCadastro">Acesse o Login!</span>
          <span v-else>Registre-se aqui!</span>
        </a>
      </div>
      <!-- FIM FORMULÁRIO -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCadastro: false,
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Menu" });
    },
  },
};
</script>

<style scoped>
#login {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(
    129deg,
    rgba(71, 14, 174, 0.9),
    rgba(95, 7, 255, 0.9)
  );

  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 350px;
  margin: 30px;
  background-color: #fff;
  border-radius: 30px;
}

.box-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 40%;
  margin: 15% 0 10% 0;
  filter: invert(90%);
}

.form {
  margin-bottom: 10%;
}

.button {
  color: #fff;
  margin-bottom: 15px;
  font-weight: 400;
}

.link span {
  font-weight: 400;
}
</style>