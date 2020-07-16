<template>
  <iframe :src="url" ref="iframe" style="border:0;"></iframe>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "page",
  
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      url: state => "http://demo.gofusion.cn"+state.app.url
    }),
	},
  mounted() {
    this.resize();
    this.iframeInit();
  },
  watch: {
    
  },
  methods: {
    resize() {
      window.onresize = () => {
        this.iframeInit();
      };
    },
    iframeInit() {
      const iframe = this.$refs.iframe;
      const clientHeight = document.documentElement.clientHeight-55;
      iframe.style.height = `${clientHeight}px`;
      iframe.style.width = "100%";
    }
  }
};
</script>

<style scoped>
</style>
