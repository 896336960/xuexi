<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components:{
			uniIcons
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	page {
	    background-color: #fff;
	    height: 100%;
	    font-size: 28rpx;
	    line-height: 1.8;
	}
	/*每个页面公共css */
</style>
