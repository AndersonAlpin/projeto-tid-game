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

        <b-button class="button" type="is-success" expanded>ENTRAR</b-button>
        <b-button type="is-ghost">Cadastre-se aqui!</b-button>
      </div>
      <!-- FIM FORMULÁRIO -->
    </div>

    <!-- IMAGENS DE FUNDO -->
      <div class="fundo fundo-esquerdo">
        <b-image :src="require('@/assets/icons/controle1.png')"></b-image>
      </div>
      <div class="fundo fundo-direito">
        <b-image :src="require('@/assets/icons/controle2.png')"></b-image>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#login {
  position: relative;
  height: 100vh;
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
  width: 300px;
  margin: 5px;
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
}

.fundo {
  position: absolute;
  filter: invert(20%);
  width: 20%;

}

.fundo-esquerdo {
  top: 10%;
  left: 0%;
}

.fundo-direito {
  top: 55%;
  right: 0%;
}

/* Media Screen */
@media screen and (max-device-width: 1024px) {
  .fundo {
    display: none;
  }
}
</style>