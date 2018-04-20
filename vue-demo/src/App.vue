<template>
  <div >
      <router-view></router-view>
      <div class="tab">
      <div >
        <router-link to="/home">
          <h4>首页</h4>
        </router-link>
      </div>
      <div >
        <router-link to="/msg">
          <h4>msg</h4>
        </router-link>
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
  }
  .tab div{
    float:left;
    padding:10px 30px;
  }
</style>
