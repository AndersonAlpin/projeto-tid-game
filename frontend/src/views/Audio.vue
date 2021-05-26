<template>
  <div>
  <audio src="@/audio.mp3"></audio>
  <button onclik=play()>play</button>
  <button oncli=pause() id="pause">pause</button>
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