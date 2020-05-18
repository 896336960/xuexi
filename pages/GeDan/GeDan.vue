<template>
	<view class="container">
		<!-- 导航蓝 -->
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content" style="height: 50px;">歌单	</block></cu-custom>
		<!-- 上面的导航栏 -->
		<view class="select-gedan">
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item, index) in items" :key="index" @tap="tabSelect" :data-id="index">
					{{ item }}
				</view>
		</scroll-view>
		</view>
		<!-- 下面的展示的选项卡 -->
		<view class="content">
			<view v-show="current === 0">
				推荐
			</view>
			<view v-show="current === 1">
				官方
			</view>
			<view v-show="current === 2">
				精品
			</view>
			<view v-show="current === 3">
				欧美
			</view>
			<view v-show="current === 4">
				摇滚
			</view>
			<view v-show="current === 5">
				民谣
			</view>
			<view v-show="current === 6">
				电子
			</view>
			<view v-show="current === 7">
				轻音乐
			</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				// 判断歌单的显示与隐藏，同事设置默认值
				current: 0,
				scrollLeft: 0,
				// 上面的导航栏中的内容
				items: ['推荐', '官方', '精品', '欧美', '摇滚', '民谣', '电子', '轻音乐']
			}
		},
		methods: {
			// 上面的选择歌单的位置点击的事件
			tabSelect(e) {
				this.current = Number(e.currentTarget.dataset.id);
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="less">
.cu-custom .cu-bar{
	height: 50px;
}
.container{
	padding-top: 50px;
	.select-gedan{
		width: 100%;
	}
	.content{
		margin-bottom: 10px;
	}
}
</style>
