import {
  baseURL,
  baseURL2
} from './config'

export function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}

export function request2(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL2 + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}