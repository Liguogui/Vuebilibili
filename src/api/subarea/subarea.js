import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

//获取分区列表
export function getSubarea() {
  const url = debug ? 'http://localhost:5050/api/getSubarea' : 'http://bilibili.applinzi.com/api/getSubarea'
  return axios.get(url)
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}

