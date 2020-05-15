import config from "@/utils/config.js"

let haveShowLoginAlert = false;
export default function(options) {
	// options.url = config.requesturl + options.url;
	// options.data = options.data || options.params;
	// options.method = (options.method || "GET").toUpperCase();
	// if (!options.header) {
	// 	options.header = {}
	// }
	let that = this
	return new Promise(function(resolve, reject) {
		uni.request({ 
			// ...options,
			url: config.requesturl + options.url,
			data: options.data || options.params,
			method: (options.method || "GET").toUpperCase(),
			success: (data) => {
				let msg = "请求出错";
				switch (data.statusCode) {
					case 500:
						break;
					case 404:
						msg = "没有找到对应的请求";
						break;
					case 403:
						msg = "没有权限访问此接口";
						break;
					case 301:
						msg = "请先登录";
						if (!haveShowLoginAlert) {
							haveShowLoginAlert = true;
							uni.showModal({
								title: "登录提醒",
								content: "登录后才能继续操作",
								showCancel: false,
								success() {
									uni.reLaunch({
										url: "/pages/SelectLogin/SelectLogin"
									})
								}
							});
						}
				}
				if (data.statusCode !== 200) {
					console
					reject(data);
				}else{
					resolve(data.data);
				}
			},
			fail: (data) => {
				console.log(data);
				reject(data);
			}
		})
	});
}
