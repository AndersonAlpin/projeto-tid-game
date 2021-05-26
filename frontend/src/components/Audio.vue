<template>
  <div>
    <audio src="@/assets/audio/audio.mp3"></audio>
    <button>play</button>
    <button>pause</button>
  </div>
</template>
<script>
const button = document.querySelector("button");
button.addEventListener("click", function play() {
  const audio = document.querySelector("audio");
  audio.play();
});
</script>



<script>
export default {
  name: "Audio",
};
</script>





<style>
</style>