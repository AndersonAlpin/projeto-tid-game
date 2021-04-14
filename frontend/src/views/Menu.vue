<template>
  <b-container>
       
       <div id="barrameio">
          <h1 id="bemvindo">Bem vindo!</h1>
          <h2 id="opc">Qual tema deseja jogar?</h2>
          <button id="butão1">tecnologia</button>
          <button id="butão2">Area medica</button>
          <button id="butão3">Area historiaca</button>
          <img src="../assets/images/logo.jpg" id="logo1">
          
          <img src="../assets/images/logo3.jpg" id="logo3">
        
       </div>
  
  

  </b-container>
</template>


<script>

  
</script>


<style>





#bemvindo{
  position: absolute;
width: 190px;
height: 41px;
left: 120px;
top: 20px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 41px;
/* identical to box height */

text-transform: uppercase;

color: #FFFFFF;


}
#opc{

position: absolute;
width: 300px;
height: 25px;
left: 70px;
top: 100px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 29px;
text-transform: uppercase;

color: #FFFFFF;
}

#butão1{
position: absolute;
width: 334px;
height: 67px;
left: 70px;
top: 150px;
color: #FFFFFF;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
text-transform: uppercase;


background: #470EAE;
border-radius: 14px;

}
#butão2{
position: absolute;
width: 334px;
height: 67px;
left: 70px;
top: 250px;
color: #FFFFFF;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
text-transform: uppercase;

background: #470EAE;
border-radius: 14px;

}

#butão3{
position: absolute;
width: 334px;
height: 67px;
left: 70px;
top: 350px;
color: #FFFFFF;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
text-transform: uppercase;


background: #470EAE;
border-radius: 14px;

}
#logo1{

  position: absolute;
left: -199.14%;
right: 27.4%;
top: 2.26%;
bottom: 24.39%;
}

#logo3{

position: absolute;
left: 270.14%;
right: 27.4%;
top: 20.26%;
bottom: 10.39%;
width: 300px;
}
#copy{

  position: absolute;
width: 650px;
height: 25px;
left: 410px;
top: 850px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 29px;
text-transform: uppercase;

color: #FFFFFF;

}
 @media screen and (min-width:640px) {
   
  #barrameio{
  position: absolute;
width: 474px;
height: 623px;
left: 940px;
top: 230px;

background: #5F07FF;
border-radius: 41px;
} 

 }

</style>
