<template>
 
 <div class="thumbnail-wrapper">
  
 <img src="@/assets/images/cenarioum.jpg" id="fundo" />
  
  <button id="close" class="closing" onClick="javascript:close_clip()"><img src="@/assets/images/controle.png" /></button>
 
 
 </div>


</template>

<script>
export default {

}
</script>

<style>

#fundo{

width: 1715px;
position: fixed;
left: 0;
top: 72px;



}

.thumbnail-wrapper {
    display:inline-block;
    position:relative;
}
.thumbnail-wrapper button {
    position:absolute;
    z-index:1;
    top:50%;
    left:50%;
    width:60px;               /* largura para o botão */
    height:30px;              /* altura para o botão */
    padding:0;
    margin:5px 0 0 60px;   /* margem à esquerda e ao topo metade da medida do botão */
    border:0 none;
 
    
}

</style>