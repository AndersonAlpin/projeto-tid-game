<template>
  <header class="header">
    <Audio />
    <img src="@/assets/images/logo-1.png" class="logo" />
    <div class="redes-sociais">
      <img src="@/assets/images/icon-whatsapp.png" class="img-redes-sociais" />
      <img src="@/assets/images/icon-facebook.png" class="img-redes-sociais" />
    </div>
  </header>
</template>

<script>
import Audio from '@/components/Audio.vue';

export default {
  name: "Header", components: { Audio },

};



</script>



<style>
.header {
  grid-area: header;
  background-color: #5f07ff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  width: 200px;
  left: 50px;
}

.redes-sociais {
  position: absolute;
  right: 50px;
}

.img-redes-sociais {
  width: 40px;
  padding-left: 5px;
}

@media screen and (max-width: 380px) {
  .redes-sociais {
    display: none;
  }
}
</style>