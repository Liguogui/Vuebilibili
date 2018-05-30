import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'
//获取鬼畜排名列表
export function getAmuseRank() {
  const url = debug ? 'http://localhost:5050/api/getAmuseRank' : 'http://bilibili.applinzi.com/api/getAmuseRank'
  const data = {
    rid:119,
    day:3,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
