import axios from 'axios'
import { baseUrl } from '@/config/env.js'

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
