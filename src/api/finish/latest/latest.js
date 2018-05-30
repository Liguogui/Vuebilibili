import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

//获取完结番剧-最新视频列表
export function getWJLatestList(page) {
  const url = debug ? 'http://localhost:5050/api/getWJLatestList' : 'http://bilibili.applinzi.com/api/getWJLatestList'
  const data = {
    tid:32,
    pn:page,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
