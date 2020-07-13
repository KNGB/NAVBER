<template>
  <div :class="classObj" class="app-wrapper">
    <Header @changRoute='changRoute'/>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" :isResetTheRoute="isResetTheRoute"/>
    <div class="main-container"  >
      <div class="resize" @mousemove="resizeTheLeft"></div>
      <div :class="{'fixed-header':fixedHeader}">
        <navbar :isResetTheRoute="isResetTheRoute"/>
        <tags-view :isResetTheRoute="isResetTheRoute"/>
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain,Settings,TagsView} from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Header from './components/Header'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Header,
    TagsView,
    Settings
  },
  mixins: [ResizeMixin],
  data(){
    return {
      isResetTheRoute:false,
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    resizeTheLeft(){

    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    changRoute(){
      this.isResetTheRoute = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height:100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{var(--sideBarWidth)});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
