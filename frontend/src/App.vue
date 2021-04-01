<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Cadastro</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Menu">Menu</router-link> |
      <router-link to="/Ranking">Ranking</router-link> |
      <router-link to="/Game">Jogo</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
