import ajax from "@/api/ajax";
const BASE_PATH='/api'
// [1、根据经纬度获取位置详情]
export const reqAddress=(geohash)=>ajax(BASE_PATH+`/position/${geohash}`)
// [2、获取食品分类列表]
export const reqFoodTypes=()=>ajax(BASE_PATH+`/index_category`)
// [3、根据经纬度获取商铺
export const reqShops=(latitude,longitude)=>ajax(BASE_PATH+`/shops`,{latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表]
export const reqShopsByCondition=(geohash,keyword)=>ajax(`/search_shops`,{geohash,keyword})
// [5、获取一次性验证码]
export const reqCaptcha=()=>ajax(`/captcha`)
// [6、用户名密码登陆]
export const reqLogin=(name,pwd,captcha)=>ajax(`/login_pwd`,{name,pwd,captcha},'POST')
// [7、发送短信验证码]
export const reqCode=(phone)=>ajax(`/sendcode`,{phone})
// [8、手机号验证码登陆]
export const reqLoginByCode=(phone,code)=>ajax(`/login_sms`,{phone,code},'POST')
// [9、根据会话获取用户信息]
export const reqUserInfo=()=>ajax(`/userinfo`)
// [10、用户登出
export const reqLogout=()=>ajax(`/logout`)