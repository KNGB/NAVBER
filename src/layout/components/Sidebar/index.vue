<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :routeReset='routeReset'/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data(){
    return{
     
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    ...mapState(
      {routeReset:state=>state.app.routeReset}
    ),
    routes: {
      get(){
        return this.$router.options.routes
      },
      set(){

      },
      
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  watch:{
    routeReset(val){
      if(val){
       // console.log(this.$router.options.routes,'sjdjhashdjkhsakjhdkj')
        this.routes=this.$router.options.routes;
        this.$forceUpdate()  

      }
    }
  }
}
</script>
