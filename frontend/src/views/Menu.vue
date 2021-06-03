<template>
  <div id="menu">
    <Navbar />
    <MenuInicial />
    <MenuCategorias />
  </div>
</template>

<script>
import MenuCategorias from "@/components/MenuCategorias.vue";
import MenuInicial from "@/components/MenuInicial.vue";
import Navbar from "@/components/Navbar.vue";

export default {
components: { MenuCategorias, MenuInicial, Navbar }
}
</script>

<style>

</style>