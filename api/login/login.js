// 引入请求插件
import request from "@/utils/request";
/**
 * 
 */
export function isLogin() {
  return request({
    url: "/login/status"
  });
}

/**
 * 手机登陆
 * 参数1： 手机号，
 * 参数2： 密码
 */

export function phoneLogin(params) {
	return request({
    url: "/login/cellphone",
		params
  });
}

/**
 * 邮箱登陆
	* 参数1： 邮箱的账户
	* 参数2： 邮箱的密码
 */
export function emailLogin(params) {
	return request({
		url: "/login",
		params
	})
}

/**
 *  刷新登陆
 */
export function RefreshLogin() {
	return request({
		url: "/login/refresh"
	})
}


