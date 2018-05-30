import jsonp from 'common/js/jsonp'
import {commonParams,options} from "api/config"
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'


export function getSwiper() {  //获取轮播图片
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';// 域名

  const data = Object.assign({},commonParams,{
    platform:'h5',
    uin:0,
    needNewCode:1
  });
  //console.log(data); //data是除了回调函数名(jsonpCallback)之外的所有的参数集合
  // data:{format:"jsonp",g_tk:5381,inCharset:"utf-8",needNewCode:1,notice:0,outCharset:"utf-8",platform:"h5",uin:0}
  return jsonp(url,data,options);
}
//获取推荐动画列表
export function getREDHList() {
  const url = debug ? 'http://localhost:5050/api/getREDHList' : 'http://bilibili.applinzi.com/api/getREDHList'
  const data = {
    rid:1,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取推荐连载番剧列表
export function getRELZFJList() {
  const url = debug ? 'http://localhost:5050/api/getRELZFJList' : 'http://bilibili.applinzi.com/api/getRELZFJList'
  const data = {
    rid:13,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取推荐完结番剧列表
export function getREWJFJList() {
  const url = debug ? 'http://localhost:5050/api/getREWJFJList' : 'http://bilibili.applinzi.com/api/getREWJFJList'
  const data = {
    rid:32,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取推荐国产动画列表
export function getREGCDHList() {
  const url = debug ? 'http://localhost:5050/api/getREGCDHList' : 'http://bilibili.applinzi.com/api/getREGCDHList'
  const data = {
    rid:153,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取推荐热门音乐列表
export function getREHotMusicList() {
  const url = debug ? 'http://localhost:5050/api/getREHotMusicList' : 'http://bilibili.applinzi.com/api/getREHotMusicList'
  const data = {
    rid:3,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
//获取推荐热门鬼畜列表
export function getREHotAmuseList() {
  const url = debug ? 'http://localhost:5050/api/getREHotAmuseList' : 'http://bilibili.applinzi.com/api/getREHotAmuseList'
  const data = {
    rid:119,
    day:7,
    jsonp:'jsonp'
  }
  return axios.get(url,{params:data})
    .then((res)=>{
      return Promise.resolve(res.data)
    })
}
