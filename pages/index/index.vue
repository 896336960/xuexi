<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar left-icon="">
			<uni-icons type="bars" size="25" slot="left" @click="isShows"></uni-icons>
			<view slot="default">
				<view>
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#4cd964"></uni-segmented-control>
				</view>
			</view>
			<uni-icons type="search" size="25" slot="right" @click="isShows"></uni-icons>
		</uni-nav-bar>
		<!-- 抽屉 -->
		<uni-drawer ref="drawer">
		    <view style="padding:30rpx;">
		        <view class="uni-title">抽屉式导航</view>
		    </view>
		</uni-drawer>
		<!-- 下面的三个展示框 -->
		<view class="content">
				<view v-show="current === 0">
						选项卡1的内容
				</view>
				<view v-show="current === 1">
					<mulice></mulice>
				</view>
				<view v-show="current === 2">
						选项卡3的内容
				</view>
		</view>
		
	</view>
</template>

<script>
import { isLogin } from "@/api/login/login.js"
import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
import mulice from "../mulice/mulice"
	export default {
		components: {
			uniDrawer,
			uniNavBar,
			uniSegmentedControl,
			mulice
		},
		data() {
			return {
				User: [],
				current: 1,
				items: ['我的', '音乐', '视频']
			}
		},
		onLoad() {
			isLogin().then(res => {
				if (res.code === 200) {
					this.User = res
				}
			})
		},
		methods: {
			isShows () {
				this.$refs.drawer.open()
			},
	  onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex;
			}
		}
		}
	}
</script>

<style lang="less">
.content{
	padding: 5px 10px;
}
uni-swiper .uni-swiper-slides{
	border-radius: 10px;
	overflow: hidden;
}
</style>
