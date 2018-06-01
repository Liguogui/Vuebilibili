<template>
   <scroll class="serialization-hot" :data="videoList">
        <div class="vedio-wrap">
          <video-list :videoList="videoList" @selectItem="selectItem"></video-list>
        </div>
   </scroll>
 </template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
  import VideoList from 'components/video-list/video-list'
  import {getRELZFJList} from 'api/home/recommend/recommend'
  import {ERR_OK} from 'api/config'
  import {selectMixin} from 'common/js/mixins'

    export default{
      mixins:[selectMixin],
      data(){
        return{
          videoList:[]
        }
      },
      created(){
        this._getRELZFJList()
      },
      methods:{
        _getRELZFJList(){
          getRELZFJList().then((res)=>{
            if(res.code === ERR_OK){
              this.videoList = res.data
            }
          })
        }
      },
      components:{
        Scroll,
        VideoList
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .serialization-hot
    position:fixed
    width:100%
    top:84px
    bottom:60px
    overflow:hidden
    .vedio-wrap
      padding-top:20px
</style>
