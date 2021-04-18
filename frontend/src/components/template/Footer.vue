<template>
  <footer class="footer">
    <span> Copyright &copy; 2021 - Desenvolvido pela equipe Sublime </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
  .footer {
    grid-area: footer;
    background-color: #5f07ff;
    font-size: 15px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>