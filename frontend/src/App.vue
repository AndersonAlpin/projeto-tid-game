<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Cadastro</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Menu">Menu</router-link> |
      <router-link to="/Ranking">Ranking</router-link> |
      <router-link to="/Game">Jogo</router-link> |
    </div> -->
    <Header />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/template/Header.vue";
import Footer from "./components/template/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>


#app {
  font-family: Avenir, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
