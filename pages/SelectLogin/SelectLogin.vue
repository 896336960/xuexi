<template>
	<view class="container">
		<view class="select-content">
			<view class="header">
				<p>畅享</p>
				<p>享受音乐，畅享生活！</p>
			</view>
			<view class="login">
				<view class="tologin" @tap="toLogin">登&nbsp;陆</view>
				<view class="register" @tap="toRegister">注&nbsp;册</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url:"../Login/Login"
				})
			},
			toRegister () {
				uni.navigateTo({
					url:"../Register/Register"
				})
			}
		}
	}
</script>

<style lang="less">
.container{
	width: 100%;
	height: 100%;
	background-image: url(../../static/login/SelectBg.jpg);	
	background-size: 100% 100%;
}
.select-content{
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.header{
		margin-bottom: 50px;
		p{
			color: #fff;
			text-align: center;
			font-size: 25px;
			font-weight: 600;
		}
	}
	.login{
		width: 100%;
		view{
			font-weight: 600;
			margin: 20px auto;
			width: 70%;
			height: 35px;
			color: #fff;
			border-radius: 50px;
			text-align: center;
			line-height: 35px; 	
		}
		.tologin{
			background-color: #0084FE;
		}
		.register{
			background-color: #00CBA7;
		}
	}
}
</style>
