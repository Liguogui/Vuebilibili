<template>
  <scroll class="latest" :data="videoList" :pullup="pullup" @scrollToEnd="_getMore">
    <div class="latest-wrap">
      <video-list :videoList="videoList" @selectItem="selectItem"></video-list>
      <loading v-show="hasMore" title=""></loading>
    </div>
  </scroll>
</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
  import VideoList from 'components/video-list/video-list'
  import Loading from 'base/loading/loading'
  import {getWJLatestList} from 'api/finish/latest/latest'
  import {ERR_OK} from 'api/config'
  import {selectMixin} from 'common/js/mixins'

  const SIZE = 20;

  export default{
    mixins:[selectMixin],
    data(){
      return {
        page:1,
        hasMore:true,
        pullup:true,
        videoList:[]
      }
    },
    created(){
      this._getLZLatestList()
    },
    methods:{
      _getLZLatestList(){
        getWJLatestList(this.page).then((res)=>{
          if(res.code === ERR_OK){
            this.videoList = res.data.archives;
            this._checkMore(res.data.page.count,this.page)
          }
        })
      },
      _getMore(){
        if(!this.hasMore){
          return
        }
        this.page++;
        getWJLatestList(this.page).then((res)=>{
          if(res.code === ERR_OK){
            this.videoList = this.videoList.concat(res.data.archives);
            this._checkMore(res.data.page.count,this.page)
          }
        })
      },
      _checkMore(count,num){
        if(count>num*SIZE){
          this.hasMore = true
        }
        else{
          this.hasMore = false
        }
      }
    },
    components:{
      Scroll,
      VideoList,
      Loading
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  .latest
    position:fixed
    width:100%
    top:84px
    bottom:60px
    overflow:hidden
    .latest-wrap
      padding-top:20px

</style>
