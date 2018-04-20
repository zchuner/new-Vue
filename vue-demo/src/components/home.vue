<template>
  <div class="container">
    <h2>home !</h2>
    <homeheader ></homeheader>
    <button @click="foo()" value="dianji" >dianji </button>
    <h2>home two!{{nub}}</h2>
  </div>
  
</template>

<script>
import homeheader from './homeheader'
export default {
  
  data () {
    return {
      nub:0
    }
  },
  methods:{
    foo:function(){
      this.nub++;
    }
  },
  components:{
    homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container{
  width:100%;
  
}

</style>
