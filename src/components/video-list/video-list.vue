<template>
   <div class="video-list" v-if="videoList.length">
     <div class="video-content">
      <ul class="video-wrap">
        <li class="video-item" v-for="(item,index) of videoList" :key="item.aid">
          <div class="video-item-a" @click="selectItem(item)" >
            <div class="item-bg">
              <div class="item-img-wrap">
                <img class="item-img" v-lazy="item.pic" @load="load">
                <div class="item-play-disc">
                  <div class="item-play-num">
                    <i class="iconfont icon-bofangqi-bofangxiaodianshi"></i>
                    {{normalizationNum(item.play)}}
                    <i class="iconfont icon-bofangqi-danmugundongkai"></i>
                    {{normalizationNum(item.video_review)}}
                  </div>
                  <div class="item-play-duration">
                    {{normalizationTime(item.duration)}}
                  </div>
                </div>
              </div>
              <div class="item-disc" v-show="showDisc">
                <div class="item-title">{{item.title}}</div>
                <div class="item-typename-wrap">
                  <div class="item-typename">
                    {{getItemName(item)}}
                  </div>
                  <div class="item-dialog-open">
                    <i class="iconfont icon-gengduo"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
     </div>
   </div>
</template>

<script type='text/ecmascript-6'>
  import {setNumMixin} from 'common/js/mixins'
  export default {
    mixins:[setNumMixin],
    props:{
      videoList:{
        type:Array,
        default(){
          return []
        }
      },
      showDisc:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      selectItem(item){
        this.$emit('selectItem',item)
      },
      getItemName(item){
        if(item.typename){
          return item.typename
        }
        else{
          return item.tname
        }
      },
      load(){
        this.$emit('load')
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .video-content
    .video-wrap
      box-sizing:border-box
      clear()
      .video-item
        width:50%
        float:left
        box-sizing: border-box
        margin-bottom:20px
        .video-item-a
          display:block
          width: 100%
          height: 100%
          .item-bg
            height: 0
            padding-bottom:91.2%
            overflow:hidden
            margin: 0 5px
            background-color: #fff
            box-shadow: 0 1px 4px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
            .item-img-wrap
              position:relative
              width: 100%
              height:0
              padding-bottom:64.22%
              background-color: $color-background
              .item-img
                width:100%
              .item-img[lazy=loading]
                width:40px
                height:40px
                position:absolute
                top: 50%
                left: 50%
                transform:translate3d(-50%,-50%,0)
              .item-play-disc
                width:100%
                box-sizing:border-box
                position:absolute
                bottom:5px
                padding:0 5px
                clear()
                color: #fff
                background: linear-gradient(180deg,rgba(33,33,33,0),rgba(33,33,33,.5))
                font-size:$font-size-small-s
                .item-play-num
                  float:left
                .item-play-duration
                  float:right
            .item-disc
              font-size:$font-size-medium
              padding:5px
              .item-title
                no-wrap()
                margin-bottom: 10px
                color:rgba(0,0,0,0.8)
              .item-typename-wrap
                clear()
                .item-typename
                  float:left
                  font-size:$font-size-small-s
                .item-dialog-open
                  float:right
</style>
