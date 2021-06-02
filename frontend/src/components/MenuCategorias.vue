<template>
  <div v-if="showMenu" id="menu-categorias" class="container is-fullhd">
    <div class="box">
      <!-- LOGO -->
      <div class="titulo">
        <span class="title">Bem Vindo!</span>
      </div>
      <div class="subtitulo">
        <span class="subtitle">Qual tema deseja jogar?</span>
      </div>

      <!-- BOTÕES -->
      <div class="buttons">
        <b-button class="button" type="is-primary" expanded
          >ÁREA MÉDICA</b-button
        >
        <b-button @click="tecnologia" class="button" type="is-primary" expanded
          >ÁREA TECNOLÓGICA</b-button
        >
        <b-button class="button" type="is-primary" expanded
          >ÁREA HISTÓRICA</b-button
        >
        <b-button class="button" type="is-primary" expanded
          >CONHECIMENTOS BÁSICOS</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento"

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    tecnologia() {
      this.$router.push({ name: "Game" });
    },
  },
  created() {
    barramento.quandoJogar((result) => (this.showMenu = result));
  },
};
</script>

<style scoped>
#menu-categorias {
  position: relative;
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

.titulo {
  margin: 15% 0 10% 0;
}

.title {
  font-size: 25px;
}

.subtitulo {
  margin-bottom: 4%;
}

.subtitle {
  font-size: 18px;
}

.buttons {
  padding-bottom: 15%;
}

.button {
  margin: 10px 15px;
  font-weight: 500;
}

.form {
  margin-bottom: 10%;
}
</style>