import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

//获取播放页面的相关推荐列表
export function getCorrelationRecommend() {
  const url = debug ? 'http://localhost:5050/api/getCorrelationRecommend' : 'http://bilibili.applinzi.com/api/getCorrelationRecommend'
  const data = {
    from:'h5'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取播放页面的评论
export function getReply(aid,page) {
  const url = debug ? 'http://localhost:5050/api/getReply' : 'http://bilibili.applinzi.com/api/getReply'
  const data = {
    oid:aid,
    pn:page,
    type:1,
    sort:2,
    nohot:1,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
