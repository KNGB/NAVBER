<template>
  <iframe :src="url" ref="iframe" style="border:0;"></iframe>
</template>

<script>
export default {
  name: "page",
  
  data() {
    return {
      
    };
  },
  computed: {
			url(){
				return 'http://demo.gofusion.cn'+this.$route.query.url ||'http://test.gofusion.cn:8099/yxjjck/page/fzdl/chukou/chukou.html'
			}
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
      const clientHeight = document.documentElement.clientHeight-74;
      iframe.style.height = `${clientHeight}px`;
      iframe.style.width = "100%";
    }
  }
};
</script>

<style scoped>
</style>
