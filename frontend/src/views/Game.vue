<template>
  <div class="Game">
    <HeaderGame />
    <Cenario1 />
    <Cenario2 />
    <Cenario3 />
  </div>
</template>

<script>
import HeaderGame from '@/components/template/HeaderGame.vue'
import Cenario1 from '@/components/cenarios/Cenario1.vue'
import Cenario2 from '@/components/cenarios/Cenario2.vue'
import Cenario3 from '@/components/cenarios/Cenario3.vue'

export default ({
  components: {
    HeaderGame,
     Cenario1,
     Cenario2,
     Cenario3,
  }
})
</script>
