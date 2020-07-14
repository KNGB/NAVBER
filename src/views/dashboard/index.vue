<template>
	<div id="iframeOrVueMian ">
		<!-- <div class="zhezhao">
			
		</div> -->
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
.zhezhao{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	z-index: 100;
	width: 100%;
	background: transparent;
}
	#iframeOrVueMian {
	height: 100%;
	position: relative;
		
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

