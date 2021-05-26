<template>
  <div class="Game">
    <HeaderGame />
    <Cenario1 />
  </div>
</template>

<script>
import Cenario1 from '@/components/cenarios/Cenario1.vue'
import HeaderGame from '@/components/template/HeaderGame.vue'

export default ({
  components: {
     Cenario1,
     HeaderGame
  }
})
</script>
