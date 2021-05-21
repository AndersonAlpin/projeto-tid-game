<template>
 
 <div class="thumbnail-wrapper">
  
 <img src="@/assets/images/cenarioum.jpg" id="fundo" />
  
  <button   onClick="javascript:close_clip()"><img src="@/assets/images/controle.png" /></button>
 
 
 </div>


</template>

<script>
export default {

}
</script>

<style>

#fundo{

width: 1920px;
position: fixed;
left: -30px;
top: 75px;
margin:-4px 0 0 30px;
height:828px;    



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
    width:0px;               /* largura para o botão */
    height:30px;              /* altura para o botão */
    padding:0;
    margin:550px 0 0 300px;   /* margem à esquerda e ao topo metade da medida do botão */
    border:0 none;
 
    
}

</style>