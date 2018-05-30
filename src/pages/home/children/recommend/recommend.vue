<template>
   <scroll class="recommend" ref="scroll">
      <div>
        <swiper :swiperList="swiperList" @load="loadImage"></swiper>
        <area-video :title="titleREDH" :videoList="REDHList" @selectItem="selectItem"></area-video>
        <area-video :title="titleRELZFJ" :videoList="RELZFJList" @selectItem="selectItem"></area-video>
        <area-video :title="titleREWJFJ" :videoList="REWJFJList" @selectItem="selectItem"></area-video>
        <area-video :title="titleREGCDH" :videoList="REGCDHList" @selectItem="selectItem"></area-video>
        <area-video :title="titleREHotMusic" :videoList="REHotMusicList" @selectItem="selectItem"></area-video>
        <area-video :title="titleREHotAmuse" :videoList="REHotAmuseList" @selectItem="selectItem"></area-video>
      </div>
   </scroll>
</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
  import Swiper from 'base/swiper/swiper'
  import AreaVideo from 'components/area-video/area-video'
  import {getSwiper,getREDHList,getRELZFJList,getREWJFJList,getREGCDHList,getREHotMusicList,getREHotAmuseList} from 'api/home/recommend/recommend'
  import {ERR_OK} from 'api/config'
  import {selectMixin} from 'common/js/mixins'

    export default{
      mixins:[selectMixin],
      data(){
        return {
          swiperList:[],
          REDHList:[],
          RELZFJList:[],
          REWJFJList:[],
          REGCDHList:[],
          REHotMusicList:[],
          REHotAmuseList:[],
          titleREDH:'热门推荐',
          titleRELZFJ:'连载番剧',
          titleREWJFJ:'完结番剧',
          titleREGCDH:'国产动画',
          titleREHotMusic:'热门音乐',
          titleREHotAmuse:'热门鬼畜'
        }
      },
      created(){
        this._getSwiper();
        this._getREDHList();
        this._getRELZFJList();
        this._getREWJFJList();

        this._getREGCDHList();
        this._getREHotMusicList();
        this._getREHotAmuseList();
      },
      methods:{
        _getSwiper(){
          getSwiper().then((res)=>{
            if(res.code === ERR_OK){
              this.swiperList= res.data.slider;
            }
          })
        },
        _getREDHList() {
          getREDHList().then((res)=>{
            if(res.code === ERR_OK){
              res.data.length>=4 ?this.REDHList = res.data.splice(0,4):this.REDHList = res.data
            }
          })
        },
        _getRELZFJList(){
          getRELZFJList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=4){
                res.data.length>=4 ?this.RELZFJList = res.data.splice(0,4):this.RELZFJList = res.data
              }
            }
          })
        },
        _getREWJFJList(){
          getREWJFJList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=4){
                res.data.length>=4 ?this.REWJFJList = res.data.splice(0,4):this.REWJFJList = res.data
              }
            }
          })
        },
        _getREGCDHList(){
          getREGCDHList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=4){
                res.data.length>=4 ?this.REGCDHList = res.data.splice(0,4):this.REGCDHList = res.data
              }
            }
          })
        },
        _getREHotMusicList(){
          getREHotMusicList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=4){
                res.data.length>=4 ?this.REHotMusicList = res.data.splice(0,4):this.REHotMusicList = res.data
              }
            }
          })
        },
        _getREHotAmuseList(){
          getREHotAmuseList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=4){
                res.data.length>=4 ?this.REHotAmuseList = res.data.splice(0,4):this.REHotAmuseList = res.data
              }
            }
          })
        },
        loadImage(){
          this.$refs.scroll.refresh();
          // if(!this.checkLoaded){ //加载图片后,scroll刷新一次
          //   this.$refs.scroll.refresh();
          //   this.checkLoaded = true;
          // }
        }
      },
      components:{
        Scroll,
        Swiper,
        AreaVideo
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .recommend
    position:fixed
    width:100%
    top:84px
    bottom:60px
    overflow:hidden
</style>
