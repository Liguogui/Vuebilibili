import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

//获取连载番剧-最新视频列表
export function getLZLatestList(page) {
  const url = debug ? 'http://localhost:5050/api/getLZLatestList' : 'http://bilibili.applinzi.com/api/getLZLatestList'
  const data = {
    tid:33,
    pn:page,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
