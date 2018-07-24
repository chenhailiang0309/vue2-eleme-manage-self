import axios from 'axios'
import { baseUrl } from '@/config/env.js'

// 退出
export const logout = () => {
  return axios.get(baseUrl + '/admin/singout')
}
// 获取一天的注册用户数量
export const getDay_userCount = (day) => {
  return axios.get(baseUrl + '/statis/user/' + day + '/count')
}
// 获取一天的订单数量
export const getDay_orderCount = (day) => {
  return axios.get(baseUrl + '/statis/order/' + day + '/count')
}
// 获取一天的注册管理员数量
export const getDay_adminCount = (day) => {
  return axios.get(baseUrl + '/statis/admin/' + day + '/count')
}
// 获取所有的用户数量
export const getAll_userCount = () => {
  return axios.get(baseUrl + '/v1/users/count')
}
// 获取所有的订单数量
export const getAll_orderCount = () => {
  return axios.get(baseUrl + '/bos/orders/count')
}
// 获取所有的管理员数量
export const getAll_adminCount = () => {
  return axios.get(baseUrl + '/admin/count')
}
// 分页获取用户列表
export const getUserList = (offset) => {
  return axios({
    url: baseUrl + '/v1/users/list?offset=' + offset + '&limit=20',
    method: 'GET'
  })
}
// 获取定位城市
export const cityGuess = () => {
  return axios({
    url: baseUrl + '/v1/cities?type=guess',
    method: 'GET',
  })
}
// 获取搜索地址
export const searchplace = (cityid, value) => {
  return axios(baseUrl + '/v1/pois?type=search&city_id=' + cityid + '&keyword=' + value)
}

// 获取参观列表
export const getResturants = (latitude, longitude, offset, limit) => {
  return axios.get(baseUrl + '/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=' + offset + '&limit=' + limit)
}

// 获取餐馆数量
export const getResturantsCount = () => {
  return axios.get(baseUrl + '/shopping/restaurants/count')
}
// category 种类列表
export const foodCategory = () => {
  return axios.get(baseUrl + '/shopping/v2/restaurant/category')
}
// 删除店铺
export const deleteResturant = restaurant_id => {
  return axios.delete(baseUrl + '/shopping/restaurant/' + restaurant_id)
}
// 更新餐馆信息
export const updateResturant = data => {
  return axios.post(baseUrl + '/shopping/updateshop', data)
}
// 获取餐馆详细信息
export const getResturantDetail = restaurant_id => {
  return axios.get(baseUrl + '/shopping/restaurant/' + restaurant_id)
}
// 获取食品列表
export const getFoods = data => {
  return axios.get(baseUrl + '/shopping/v2/foods', data)
}
// 获取食品数量
export const getFoodsCount = data => {
  return axios.get(baseUrl + '/shopping/v2/foods/count', data)
}
// 获取menu列表
export const getMenu = (restaurant_id, allMenu) => {
  return axios.get(baseUrl + '/shopping/v2/menu?restaurant_id=' + restaurant_id + '&allMenu=' + allMenu)
}
// 获取menu详情
export const getMenuById = category_id => {
  return axios.get(baseUrl + '/shopping/v2/menu/' + category_id)
}
// 更新食品信息
export const updateFood = data => {
  return axios.post(baseUrl + '/shopping/v2/updatefood', data)
}
// 删除食品
export const deleteFood = food_id => {
  return axios.delete(baseUrl + '/shopping/v2/food/' + food_id)
}
// 获取订单列表
export const getOrderList = data => {
  return axios.get(baseUrl + '/bos/orders', data)
}
// 获取订单数量
export const getOrderCount = data => {
  return axios.get(baseUrl + '/bos/orders/count', data)
}
// 获取用户信息
export const getUserInfo = user_id => {
  return axios.get(baseUrl + '/v1/user/' + user_id)
}
// 获取地址信息
export const getAddressById = address_id => {
  return axios.get(baseUrl + '/v1/addresse/' + address_id)
}
// 添加商铺
export const addShop = data => {
  return axios.post(baseUrl + '/shopping/addShop', data, )
}
// 获取当前店铺食品种类
export const getCategory = restaurant_id => {
  return axios.get(baseUrl + '/shopping/getcategory/' + restaurant_id)
}
// 添加食品种类
export const addCategory = data => {
  return axios.post(baseUrl + '/shopping/addcategory', data)
}
// 添加食品
export const addFood = data => {
  return axios.post(baseUrl + '/shopping/addfood', data)
}
// 获取用户分布信息
export const getUserCity = () => {
  return axios.get(baseUrl + '/v1/user/city/count')
}
