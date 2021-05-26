<template>
  <div>
  <audio src="audio.mp3"></audio>
  <button>play</button>
   </div>

   
</template>


<script>


export default {
  name: "Audio",
  data(){

    
  
  const button = document.querySelector('button')
button.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.play()
})

  

},
play:function(){


  const button = document.querySelector('button')
button.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.play()
})
}

};





</script>





<style>

</style>