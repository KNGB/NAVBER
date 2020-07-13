<template>
  <iframe :src="url" ref="iframe" style="border:0;"></iframe>
</template>

<script>
export default {
  name: "viframe",
  props: ["url"],
  data() {
    return {
      
    };
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
      const clientHeight = document.documentElement.clientHeight - 50-70-34;
      iframe.style.height = `${clientHeight}px`;
      iframe.style.width = "100%";
    }
  }
};
</script>

<style scoped>
</style>
