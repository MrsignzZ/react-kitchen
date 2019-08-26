import JsonP from 'jsonp'
import { message } from "antd";

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
          if (res.status === 0) {
            // message.success('This is a message of success', 1)
            resolve(res)
          } else{
            message.error(res.msg, 1);
          }
        }
      )
    })
  }
}