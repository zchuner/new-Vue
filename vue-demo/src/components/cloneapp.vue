<template>
<div class="app">
  <div class="">
  	<cloneleft></cloneleft>
  </div>
  <div class="">
  	<clonecenter></clonecenter>
  </div>
</div>
</template>

<script>
import cloneleft from './cloneleft'
import clonecenter from './clonecenter'
export default {
 name: 'cloneapp',
 
  data () {
    return {
    	
    }
  },
  methods:{
  	
  },
  components:{cloneleft ,clonecenter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app{
 
}
</style>
