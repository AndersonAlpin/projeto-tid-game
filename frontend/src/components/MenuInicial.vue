<template>
  <div v-show="showMenu" id="menu-inicial" class="container is-fullhd">
    <div class="box">
      <!-- LOGO -->
      <div class="titulo">
        <span class="title">Bem Vindo!</span>
      </div>

      <!-- BOTÕES -->
      <div class="buttons">
        <b-button @click="jogar" class="button" type="is-success" expanded>JOGAR</b-button>
        <b-button class="button" type="is-danger" expanded >RANKING</b-button>
        <b-button @click="sobre" class="button" type="is-primary" expanded outlined>SOBRE</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento"

export default {
  data() {
    return {
      showMenu: true,
    };
  },
  methods: {
    jogar(){
      this.showMenu = false;
      barramento.jogar();
    },
    sobre(){
      this.$router.push({ name: "About"});
    }
  }
};
</script>

<style scoped>
#menu-inicial {
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

.titulo {
  margin: 15% 0 10% 0;
}

.title {
  font-size: 25px;
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