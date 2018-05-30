
import originJsonp from 'jsonp'

export default function jsonp(url,data,options) {
  url += (url.indexOf('?')<0 ? '?' : '&') + param(data); //除了回调函数之外的完整url（少了一个&jsonpCallback=_jp0）
  //url = url + 如果url没有?号就加上'?'号否则加上'&' + 整合之后的查询字符串
  return new Promise((resolve,reject) =>{
    originJsonp(url,options,(err,data) => { //option:{ param:'jsonpCallback' } jsonp工具要求写法
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  } )
}

function param(data) {       //将参数对象变成查询字符串
  let url = '';
  for(let k in data){
    let value = data[k] !== undefined ? data[k] : '';
    url +='&'+ k +'='+encodeURIComponent(value)
  }
  //console.log(url) //&g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1
  return url ? url.substr(1) : '';
}
