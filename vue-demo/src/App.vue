<template>
  <div >
      <h1>{{$route.params.id}}</h1>
      <div class="topH">
        <router-view></router-view>
      </div>
      <div class="tab-top">
        
        <div class="tab">
          <div >
            <router-link to="/cloneapp">
              <h4>点单</h4>
            </router-link>
          </div>
          <div >
            <router-link to="/msg">
              <h4>msg</h4>
            </router-link>
          </div>
          <div >
            <router-link to="/home">
              <h4>home</h4>
            </router-link>
          </div>
          
          
        </div>
      </div>
  </div>
</template>
<script > 
  export default {
 
  };
</script>
<style>
body{
  width:100%;
  height:100%;
  }
  .tab{
    width:100%;
    height:50px;
    border:3px solid pink;
    position:fixed;
    bottom:0;
    left:0;
    background:yellow;
    
  }
  
  .tab div{
    float:left;
    padding:10px 30px;

  }
  .topH{
    float:left;
    margin-bottom:60px;
  }
 
</style>
