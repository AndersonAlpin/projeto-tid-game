<template>
  <header class="navbar">
    <div class="container-fluid">
      <img class="nav-brand logo" src="@/assets/images/logo-1.png" />
      <form class="d-flex menu-icons">
        <a href="#">
          <img
            class="nav-brand img-icons"
            src="@/assets/images/icon-whatsapp.png"
          />
        </a>
        <a href="#">
          <img
            class="nav-brand img-icons"
            src="@/assets/images/icon-facebook.png"
          />
        </a>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.navbar {
  background-color: #5f07ff;
  /* min-width: 1000px; */
  height: 100px;
}

.logo {
  margin-left: 80px;
}

.menu-icons {
  margin-right: 80px;
}

.img-icons {
  padding: 0 5px;
}
</style>