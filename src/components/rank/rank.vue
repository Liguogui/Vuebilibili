<template>
   <div class="rank">
      <ul class="rank-ul">
        <li class="rank-item" v-for="(item,index) of rankList" :key="item.aid">
          <div class="rank-link" @click="selectItem(item)">
            <div class="rank-wrap">
              <div class="num-wrap">
                <span :class="getRankCls(index)">{{getRankText(index)}}</span>
              </div>
              <div class="item-content">
                <div class="img-wrap">
                  <img class="item-img" v-lazy="item.pic"/>
                </div>
                <div class="item-disc">
                  <div class="title">{{item.title}}</div>
                  <div class="up"><i class="iconfont icon-UPzhu"></i>&nbsp{{item.author}}</div>
                  <div class="message">
                    <div class="message-l">
                      <i class="iconfont icon-bofang2"></i>&nbsp
                      {{normalizationNum(item.play)}}
                    </div>
                    <div class="message-r">
                      <i class="iconfont icon-bofangqi-danmugundongkai"></i>&nbsp
                      {{item.video_review}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
   </div>
</template>

<script type='text/ecmascript-6'>
  import {setNumMixin} from 'common/js/mixins'
    export default{
      mixins:[setNumMixin],
      props:{
        rankList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        selectItem(item){
          this.$emit('selectItem',item)
        },
        getRankText(index){
          if(index>=3){
            return index+1
          }
        },
        getRankCls(index){
          if(index<3){
            return `icon icon${index}`
          }
          else{
            return 'text'
          }
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .rank-ul
    padding-top:10px
    .rank-item
      align-items: center
      margin-bottom:10px
      .rank-link
        display:block
        width: 100%
        height:100%
        .rank-wrap
          display:flex
          align-items: center
          .num-wrap
            flex:0 0 25px
            width:25px
            margin-left:10px
            margin-right:10px
            text-aligin:center
            .icon
              display: inline-block
              width: 25px
              height: 24px
              background-size: 25px 24px
              &.icon0
                bg-image('first')
              &.icon1
                bg-image('second')
              &.icon2
                bg-image('third')
            .text
              color: $color-text-b
          .item-content
            flex:1
            display:flex
            align-items: center
            .img-wrap
              position:relative
              flex:0 0 117px
              width:117px
              height: 0
              padding-bottom: 75px
              overflow: hidden
              border-radius:10px
              .item-img
                width:100%
              .item-img[lazy=loading]
                width:40px
                height:40px
                position:absolute
                top: 50%
                left: 50%
                transform:translate3d(-50%,-50%,0)
            .item-disc
              flex:1
              box-sizing:border-box
              padding-left:10px
              padding-right:10px
              text-align:left
              .title
                color:$color-text-b
                font-size:$font-size-medium
                overflow:hidden
              .up
                margin:10px 0
                font-size:$font-size-small
              .message
                font-size:$font-size-small
                clear()
                .message-l
                  float:left
                .message-r
                  float:right
                  margin-right:20%
</style>
