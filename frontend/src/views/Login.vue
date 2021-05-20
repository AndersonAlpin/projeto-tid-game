<template>
  <div class="container">
    <div class="row">
      <form class="form">
        <div class="emai">
        <input id="email" type="email" placeholder="EMAIL:">
          </div>
          
            <div class="senh">
              <input id="senha" type="Password" placeholder="SENHA:">
            </div>
      </form> 
       </div>
  </div>
  
</template>

<style scoped>
.container{
   background: #5f07ff;
  width: 300px;
  height: 400px;
  border-radius: 41px;
  margin-top: 30px;

  display: flex;
  justify-content: center;
}
.row{
   background: #5f07ff;
  width: 300px;
  height: 400px;
  border-radius: 41px;
  margin-top: 30px;

  display: flex;
  justify-content: center;
}
#email{
  background: #ffffff1f;
  width: 255px;
  height: 40px;
  border-radius: 7px;
  margin-top: 150px;
  border-color: #ffffff;
  margin-left: 15px;

  display: flex;
  justify-content: center;
}
#senha{
  background: #ffffff00;
  width: 255px;
  height: 40px;
  border-radius: 7px;
  margin-top: 27px;
  margin-left: 15px;
   border-color: #ffffff;

  
  justify-content: center;
}

#texto{
  color: #ffffff5b;
  margin-top:10px;
  margin-left: -150px;
}


</style>