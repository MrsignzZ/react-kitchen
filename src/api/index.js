import React from 'react'
import axios from 'axios'
import JsonP from 'jsonp'

export default class Axios {
  static jsonp(options) {
    // let baseApi = 'http://api.jisuapi.com/recipe/search'

    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          params: 'callback'
        },
        function (err, res) {
          if (res.status == '0') {
            resolve(res)
          } else {
            reject(res.msg)
          }
        }
      )
    })
  }
}