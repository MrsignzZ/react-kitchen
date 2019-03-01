import React from 'react'

export default {
  // 字符串转成数组
  toArray(str) {
    return str.split(",")
  },
  // 材料符号转化为文字
  getRealType(arr){
    return arr.map((index) => {
      return {
        ...index,
        type: index.type === '0' ? '配料' : '主材'
      }
    })
  }
}