<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/index'
export default {
  components:{
    Header
  },
  name: 'App'
}
</script>
<style scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
