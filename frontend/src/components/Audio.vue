<template>
  <div>
<<<<<<< HEAD:frontend/src/views/Audio.vue
  <audio src="@/audio.mp3"></audio>
  <button onclik=play()>play</button>
  <button oncli=pause() id="pause">pause</button>
=======
  <audio src="@/assets/audio/audio.mp3"></audio>
  <button>play</button>
  <button>pause</button>
>>>>>>> 455051db1f7551ee8b34cccf969b4effebac15d0:frontend/src/components/Audio.vue
   </div>

   
</template>
<script>


const button = document.querySelector('button')
button.addEventListener('click', function play(){
  const audio = document.querySelector('audio')
  audio.play()

})


</script>



<script>

export default {
  name: "Audio",
};

    
  
  
</script>





<style>

</style>