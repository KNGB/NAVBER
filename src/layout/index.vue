<template>
  <div :class="classObj" class="app-wrapper">
    
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" :isResetTheRoute="isResetTheRoute"/>
    <div class="main-container"  >
      <div class="resize"  draggable="true" @drag="resizeTheLeft($event)" @dragend="resizeTheLeft($event)">
        <div class="resizeShow"></div>
      </div>
      <div :class="{'fixed-header':fixedHeader}">
        <navbar :isResetTheRoute="isResetTheRoute"/>
        <tags-view :isResetTheRoute="isResetTheRoute" v-if='false'/>
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain,Settings,TagsView} from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    
    TagsView,
    Settings
  },
  mixins: [ResizeMixin],
  data(){
    return {
      isMouseDown:false,
    }
  },
  computed: {
    ...mapState({
      isResetTheRoute:state => state.isResetTheRoute,
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
    resizeTheLeft(e){
       document.documentElement.style.setProperty('--sideBarWidth',e.clientX+'px');
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
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
