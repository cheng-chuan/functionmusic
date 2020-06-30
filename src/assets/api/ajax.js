import axios from 'axios'

export default function ajax(url = '',params = {},type = 'GET'){
  // 1.定义promise对象
  let promise;
  return new Promise((resolve,reject)=>{
    // 2.判断请求方式
    if('GET' === type){
      // 2.1拼接请求的数据字符串
      let paramsStr = '';
      Object.keys(params).forEach(key=>[
        paramsStr += key + '=' + params[key] + '&'
      ])
      // 2.2过滤掉末尾的‘&’
      if(paramsStr != ''){
        paramsStr = paramsStr.substring(0,paramsStr.lastIndexOf("&"));
      }
      // 2.3拼接完整的路径
      url += "?" + paramsStr;
      // 2.4发送get请求
      promise = axios.get(url)
    }else if('POST' === type){
      promise = axios.post(url,params,{headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}})
    }
    // 3.返回请求结果
    promise.then((data)=>{
      resolve(data)
    }).catch((error)=>{
      reject(error)
    })

  })
}
