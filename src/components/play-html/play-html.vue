<template>
  <transition name="slide" v-if="showPlayHtml">
   <div class="playHtml">
     <div class="play-header">
       <span @click="back">
         <i class="iconfont icon-jiantou"></i>返回
       </span>
     </div>
     <scroll class="scroll" :data="replyList" ref="scroll" :pullup="pullup" @scrollToEnd="_getMoreReply">
       <div>
         <div class="player-wrap">
           <div class="player-container">
             <div class="load-layer">
               <img class="load-img" v-lazy="video.pic"/>
               <div class="load-icon">
                 <div class="load-durtime">
                   {{normalizationTime(video.duration)}}
                 </div>
                 <div class="load-tv">
                   <i class="iconfont icon-bofangqi-bofangxiaodianshi"></i>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="video-disc">
           <div class="disc-bg">
             <div class="img-wrap">
               <img class="video-img" v-lazy="video.pic"/>
             </div>
             <div class="disc-wrap">
               <div class="title">{{video.title}}</div>
               <div class="message">
                 <div class="message-item" v-if="video.coins"><i class="iconfont icon-qianbi"></i>&nbsp{{normalizationNum(video.coins)}}</div>
                 <div class="message-item" v-if="video.favorites"><i class="iconfont icon-ai-mark"></i>&nbsp{{normalizationNum(video.favorites)}}</div>
                 <div class="message-item" v-if="video.video_review"><i class="iconfont icon-bofangqi-danmugundongkai"></i>&nbsp{{normalizationNum(video.video_review)}}</div>
               </div>
             </div>
           </div>
         </div>
         <area-three :title="title" :disc="disc" :videoList="videoList" @load="loadImg"></area-three>
         <reply :acount="acount" :replyList="replyList"></reply>
         <loading v-show="hasMoreReply" title=""></loading>
       </div>
     </scroll>
   </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
  import AreaThree from 'components/area-three/area-three'
  import Reply from 'components/reply/reply'
  import Loading from 'base/loading/loading'
  import {mapMutations, mapGetters} from 'vuex'
  import {setNumMixin} from 'common/js/mixins'
  import {getCorrelationRecommend,getReply} from 'api/play-html/play-html'
  import {ERR_OK} from "api/config";

  export default {
    mixins: [setNumMixin],
    data() {
      return {
        title: '相关推荐',
        disc: '',
        videoList: [],
        page:1,
        acount:0,
        replyList:[],
        pullup:true,
        hasMoreReply:true
      }
    },
    computed: {
      ...mapGetters([
        'video',
        'showPlayHtml',
        'playing'
      ])
    },
    methods: {
      _getCorrelationRecommend() {
        getCorrelationRecommend().then((res) => {
          if (res.code === ERR_OK) {
            res.result.list.length>=6 ?this.videoList=res.result.list.splice(0,6):this.videoList=res.result.list
          }
        })
      },
      _getReply(){
        getReply(this.video.aid,this.page).then((res)=>{
          if(res.code === ERR_OK){
            this.acount = res.data.page.acount;
            this.replyList = res.data.replies;
            this._checkHasMoreReply();
          }
        })
      },
      _getMoreReply(){
        if(!this.hasMoreReply){
          return
        }
        this.page++;
        getReply(this.video.aid,this.page).then((res)=>{
          if(res.code === ERR_OK){
            this.acount = res.data.page.acount;
            this.replyList = this.replyList.concat(res.data.replies);
            this._checkHasMoreReply();
          }
        })
      },
      _checkHasMoreReply(){
        this.acount>this.page*20 ? this.hasMoreReply=true : this.hasMoreReply=false
      },
      loadImg(){
        this.$refs.scroll.refresh();
      },
      back() {
        this.setShowPlayHtml(false);
        this.setVideo({});
        this.setPlaying(false);
      },
      ...mapMutations({
        setVideo: 'SET_VIDEO',
        setShowPlayHtml: 'SET_SHOW_PLAY_HTML',
        setPlaying:'SET_PLAYING'
      })
    },
    watch: {
      showPlayHtml(newValue) {
        if (newValue) {
          this._getCorrelationRecommend();
          this._getReply();
          this.page=1;
        }
      }
    },
    components: {
      Scroll,
      AreaThree,
      Reply,
      Loading
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .playHtml
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 9999
    background: $color-background
    &.slide-enter-active, .slide-leave-active
        transition: all 0.1s
    &.slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
    .play-header
      width: 100%
      height:44px
      box-sizing:border-box
      line-height:24px
      padding:10px
      text-align:left
      background-color: $color-white;
      color:$color-pink
    .scroll
      position:fixed
      top:44px
      left:0
      right:0
      bottom:0
      overflow:hidden
      .player-wrap
        position:relative
        width: 100%
        height:230px
        background-color: $color-background-block;
        overflow:hidden
        .player-container
          position:absolute
          width:100%
          top:0
          bottom:0
          .load-img
            width: 100%
            opacity:0.85
            filter:blur(5px)
          .load-icon
            width:100%
            position:absolute
            bottom:20px
            clear()
            .load-durtime
              position:absolute
              bottom:0
              width:45px
              height: 20px
              line-height:20px
              float:left
              margin-left:10px
              border:1px solid hsla(0,0%,100%,.5)
              background-color: hsla(0,0%,100%,.2)
              border-radius:10px
              color:$color-white
              font-size:$font-size-small
            .load-tv
              float:right
              margin-right:10px
              color:rgba(225,225,225,0.8)
              font-size:$font-size-large-max
      .video-disc
        width:100%
        box-sizing:border-box
        padding:20px 10px
        .disc-bg
          width:100%
          height:85.2px
          box-sizing:border-box
          display:flex
          align-items: center
          background-color: #fff;
          .img-wrap
            flex:0 0 126px
            width:126px
            height: 85.2px
            .video-img
              width:100%
              height:85.2px
          .disc-wrap
            flex:1
            margin-left:10px
            text-align:left
            .title
              font-size:$font-size-medium
              margin-bottom:10px
              overflow:hidden
            .message
              display:flex
              aligin-items:center
              text-align:center
              font-size:$font-size-small
              .message-item
                flex:1

</style>
