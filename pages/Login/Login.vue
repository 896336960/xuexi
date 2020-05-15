<template>
	<view class="login-container">
		<view class="login-content">
			<view class="header">
				<a href="" :class="{ current: isSelect }" @click.prevent="isToSelect(true)">手机登陆</a>
				<a href="" :class="{ current: !isSelect }" @click.prevent="isToSelect(false)">邮箱登陆</a>
			</view>
			<view class="login-inner">
				<!-- 登陆部分 -->
				<view class="phoneLogin">
					<form>
						<!-- 手机登陆 -->
						<view class="inner" :class="{ current: isSelect }">
							<view class="cu-form-group">
								<text class="title">手机账号：</text>
								<input type="text" clearable v-model="phone.phone" placeholder="请输入账号" />
							</view>
							<view class="cu-form-group">
								<text class="title">密码：</text>
								<input type="password" displayable v-model="phone.password" placeholder="请输入密码" />
							</view>
						</view>
						<!-- 邮箱登陆 -->
						<view class="inner" :class="{ current: !isSelect }">
							<view class="cu-form-group">
								<text class="title">邮箱账号：</text>
								<input type="text" clearable v-model="Email.email" placeholder="请输入账号" />
							</view>
							<view class="cu-form-group">
								<text class="title">密码：</text>
								<input type="password" displayable v-model="Email.password" placeholder="请输入密码" />
							</view>
						</view>
						<button type="primary" class="submit" @click="submit">登陆</button>
					</form>
				</view>
				<!-- 邮箱登陆 -->
			</view>
		</view>
	</view>
</template>

<script>
import { phoneLogin, emailLogin, RefreshLogin } from '@/api/login/login.js'
	export default {
		data() {
			return {
				// 显示哪个登陆界面，true显示手机登陆，false显示邮箱登陆
				isSelect: true,
				phone: {
					phone: '',
					password: ''
				},
				Email: {
					email: "",
					password: ""
				}
			}
		},
		methods: {
			isToSelect (flag) {
				this.isSelect = flag;
			},
			submit () {
				if (this.isSelect) {
					// 手机登陆
					if (this.phone.phone.trim() !== '' && this.phone.password.trim() !== ''){
						phoneLogin(this.phone).then(res => {
							if (res.code === 200) {
								uni.showToast({
								    title: '登陆成功',
								    duration: 2000,
										icon: "none",
										position: "bottom"
								});
								uni.navigateTo({
									url:"../index/index"
								})
							}
						}).catch(err => {
							uni.showToast({
							    title: '登陆失败，请检查账号密码是否错误',
							    duration: 2000,
									icon: "none",
									position: "bottom"
							});
						})
					} else {
						uni.showToast({
						    title: '请输入正确的账号和密码',
						    duration: 2000,
								icon: "none",
								position: "bottom"
						});
					}
				} else{
					//邮箱登陆
					if (this.Email.email.trim() !== '' && this.Email.password.trim() !== '') {
						emailLogin(this.Email).then(res => {
							if (res.code === 200) {
								uni.showToast({
								    title: '登陆成功',
								    duration: 2000,
										icon: "none",
										position: "bottom"
								});
							}
						}).catch(err => {
							uni.showToast({
							    title: '登陆失败，请检查账号密码是否错误',
							    duration: 2000,
									icon: "none",
									position: "bottom"
							});
						})
					} else {
						uni.showToast({
						    title: '请输入正确的账号和密码',
						    duration: 2000,
								icon: "none",
								position: "bottom"
						});
					}
				}
			}
		}
	}
</script>

<style lang="less">
.login-container{
	width: 100%;
	height: 100%;
	// background-image: url(../../static/login/LoginBgimg.gif);
	// background-size: auto 80%;
	background-color: #004271;
}
.login-content{
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	.header{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		a{
			width: 100px;
			display: inline-block;
			text-align: center;
			color: #fff;
			font-size:17px;
			text-decoration: none;
		}
		.current{
			 color:#0F0;text-shadow:#0C0 3px 3px 3px;
			 // text-shadow:#FFF 1px 1px 1px; color:red
			 
		}
	}
	.login-inner{
		box-sizing: border-box;
		padding: 50px 50px;
		font-size: 17px;
		color: #F0F0F0;
		form{
			.inner{
				display: none;
			}
			.current{
				display: block;
				.cu-form-group{
					border-radius: 50px;
					border: 1px solid #eee;
					background-color: rgba(0,0,0,0);
				}
				.cu-form-group:nth-child(2){
					margin-top: 20px;
				}
			}
			.submit{
				margin-top: 30px;
			}
		}
			
	}
}
</style>
