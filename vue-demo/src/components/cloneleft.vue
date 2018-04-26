<template>
<div class="left">
  <ul>
    <li>
      <i class="el-icon-news"></i>
      <div>收银</div>
    </li>
    <li>
      <i class="el-icon-document"></i>
      <div>店铺</div>
    </li>
    <li>
      <i class="el-icon-goods"></i>
      <div>商品</div>
    </li>
    <li>
      <i class="el-icon-service"></i>
      <div>会员</div>
    </li>
    <li>
      <i class="el-icon-edit"></i>
      <div>统计</div>
    </li>
  </ul>
</div>
</template>

<script>

export default {
 name: 'cloneleft',
  data () {
    return {
    	
    }
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
  coloe:#999;
  font-size:10px;
  height:100%;
  width:8%;
  float:left;
  background-color:#ccc;
}
.left ul{
  overflow:hidden;
  height:100%;
}
.left ul li{
  width:100%;
  height:20%;
  border:1px solid green;
  padding:30px 10px;
  list-style: none;
  text-align: center;
  box-sizing:border-box;
}
</style>
