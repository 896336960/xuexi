<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="screen-swiper" :class="dotStyle ? 'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<!-- 下面的分类 -->
		<view class="music-fenlei">
			<view class="music-item">
				<uni-icons type="search" size="40"></uni-icons>
				<text>电台</text>
			</view>
			<view class="music-item" @click="toGeDad">
				<uni-icons type="search" size="40"></uni-icons>
				<text>歌单</text>
			</view>
			<view class="music-item">
				<uni-icons type="search" size="40"></uni-icons>
				<text>歌手</text>
			</view>
			<view class="music-item">
				<uni-icons type="search" size="40"></uni-icons>
				<text>排行榜</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图中的数据
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				// 控制轮播图下面的点的样式
				dotStyle: true
			}
		},
		methods: {
			toGeDad () {
				uni.navigateTo({
					url: "../GeDan/GeDan",
					 animationType: 'fade-in',
					 animationDuration: 200
				})
			}
		}
	}
</script>

<style lang="less">
.music-fenlei{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	.music-item{
		color: #333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.uni-icons{
			height: 53px;
		}
	}
}
</style>
