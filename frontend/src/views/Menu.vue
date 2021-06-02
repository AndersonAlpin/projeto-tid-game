<template>
  <div id="menu">
    <MenuInicial />
    <MenuCategorias />
  </div>
</template>

<script>
import MenuCategorias from "@/components/MenuCategorias.vue";
import MenuInicial from "@/components/MenuInicial.vue";

export default {
components: { MenuCategorias, MenuInicial }
}
</script>

<style>

</style>