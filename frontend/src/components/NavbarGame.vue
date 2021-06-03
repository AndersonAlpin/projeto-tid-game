<template>
  <div id="navbar">
    <b-navbar type="is-dark" mobile-burger>
      <template #brand>
        <div class="buttons">
          <div class="pontuacao">PONTUAÇÃO: <span>0</span></div>
        </div>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="user-photo">
            <img src="@/assets/icons/perfil.png" alt="" />
          </div>

          <div class="user-logged">
            <b-navbar-dropdown label="Sublime Gaming">
              <b-navbar-item @click="menu" > Menu </b-navbar-item>
              <b-navbar-item @click="sair" > Sair </b-navbar-item>
            </b-navbar-dropdown>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ["name", "logout"],
  methods: {
    menu() {
      this.$router.push({ name: "Menu" });
    },
    sair() {
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<style scoped>

.pontuacao {
  width: 142px;
  height: 40px;

  margin-left: 25px;
  border-bottom: 2px solid #fff;

  display: flex;
  align-items: center;
}

.pontuacao span {
  margin-left: 5px;
}
</style>