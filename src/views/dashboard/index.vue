<template>
	<div id="iframeOrVueMian ">
    <v-iframe :url='url'  ></v-iframe>
	</div>

</template>

<script type="text/ecmascript-6">
	import VIframe from '@/components/iframe'
	export default {
		components: {
			VIframe
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		updated() {},
		methods: {},
		computed: {
			url(){
				return this.$route.meta.url ||'http://test.gofusion.cn:8099/yxjjck/page/fzdl/chukou/chukou.html'
			}
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	#iframeOrVueMian {
    height: 100%;
		background-color: #F0F2FA;
		&:after {
			content: ".";
			display: block;
			height: 0;	
			clear: both;
			visibility: hidden;
			
		}
	}
</style>

