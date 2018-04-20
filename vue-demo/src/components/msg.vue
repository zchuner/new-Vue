<template>
<div>
  <h3>我是列表页</h3>
  <div class="list" v-for="item in list">
  	<div>
  		<span>名称：{{item.name}}</span>
  		<span>编号：{{item.id}}</span>
  	</div>
  	<div v-show="isshow">
  		<router-link to="./home">
  		<img  :src='item.img' />
  		</router-link>
  	</div>
  	<div @click="ifshow">
  		<h4>{{title}}看到它？</h4>
  	</div>
  </div>
</div>
</template>

<script>

export default {
 name: 'msg',
  data () {
    return {
    	isshow:true,
    	title:"不想",
    	list:[
    		{
    		name:'北京',
    		id:1,
    		img:'static/logo.png'
    		},
    		{
    		name:"上海",
    		id:2,
    		img:"static/logo.png"
    		},
    		{
    		name:"深圳",
    		id:3,
    		img:"static/logo.png"
    		},
    		{
    		name:"广州",
    		id:4,
    		img:"assets/logo.png"
    		}
    	]
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
