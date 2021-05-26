<template>
  <div>
  <audio src="@/audio.mp3"></audio>
  <button>play</button>
  <button>pause</button>
   </div>

   
</template>
<script>


const button = document.querySelector('button')
button.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.pause()

})
</script>



<script>

export default {
  name: "Audio",
};

    
  
  
</script>





<style>

</style>