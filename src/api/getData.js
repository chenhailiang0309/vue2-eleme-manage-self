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

// 更新餐馆信息
export const updateResturant = data => {
  return axios.post(baseUrl + '/shopping/updateshop', data)
}
