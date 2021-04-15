<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/template/Header.vue";
import Content from "@/components/template/Content.vue";
import Footer from "@/components/template/Footer.vue";

export default {
  components: { Header, Footer, Content },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

#app {
  color: #ffffff;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 40px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
}

@media screen and (max-width: 320px) {
  #app {
    width: 300px;
  }
}
</style>
