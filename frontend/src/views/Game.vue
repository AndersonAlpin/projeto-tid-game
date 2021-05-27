<template>
  <div class="Game">
    <HeaderGame />
    <Cenario1 />
    <Cenario2 />
  </div>
</template>

<script>
import Cenario1 from '@/components/cenarios/Cenario1.vue'
import Cenario2 from '@/components/cenarios/Cenario2.vue'
import HeaderGame from '@/components/template/HeaderGame.vue'

export default ({
  components: {
     Cenario1,
     Cenario2,
     HeaderGame
  }
})
</script>
