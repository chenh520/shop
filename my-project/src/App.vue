<template>
  <div id="app">
    
    <hello-hoder></hello-hoder>
    <router-view/>
    <hello-foot></hello-foot>
  </div>
</template>

<script>
import HelloHoder from"./components/HelloHoder";
import HelloFoot from"./components/HelloFoot";
export default {
  name: 'App',
  components:{
    HelloHoder,
    HelloFoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 *{margin:0px; padding:0px;}
</style>
