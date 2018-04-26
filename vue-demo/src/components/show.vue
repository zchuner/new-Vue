<template>
<div>
  <h3>我是详情页</h3>
  <div class="list" >
  	<div>
  		<span >名称：111{{list.name}}</span>
  		<span>编号：222{{list.id}}</span>
  	</div>
  	<div v-show="isshow">
  		
  		<img  :src='static/logo.png' />
  		
  	</div>
  	<div @click="ifshow">
  		<h4>{{title}}看到它？</h4>
  	</div>
  </div>
</div>
</template>

<script>

export default {
 name: 'show',
 props:['list'],
  data () {
    return {
    	isshow:true,
    	title:"不想",
    	list:{name:'li',id:1,img:'static/logo.png'}
        
      
    	
    }
  },
  methods:{
  	ifshow:function(){
  		if(this.isshow){
  			this.isshow=false;
  			this.title="想";
  		}else{
  			this.isshow=true;
  			this.title="不想";
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
	float:left;
	width:50%;
	
}
.list div{
	padding:5px;
}
.list div span{
	padding-right:20px;
}
</style>
