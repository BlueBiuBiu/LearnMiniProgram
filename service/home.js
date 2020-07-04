import {
  request,
  request2
 } from './network'

export function getMultipleData(){
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page){
  return request2({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}