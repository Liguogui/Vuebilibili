<template>
   <div class="reply" v-if="acount">
      <div class="title">评论（{{normalizationNum(acount)}}）</div>
      <ul class="reply-wrap" v-if="replyList.length">
        <li class="reply-item" v-for="(item,index) of replyList">
          <div class="avatar-wrap">
            <img class="avatar" v-lazy="item.member.avatar"/>
          </div>
          <div class="reply-disc">
            <div class="uname">{{item.member.uname}}</div>
            <div class="content">{{item.content.message}}</div>
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
        acount:{
          type:Number,
          default:0
        },
        replyList:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .reply
    border-top:2px solid $color-border
    .title
      width: 100%
      box-sizing:border-box
      padding:10px
      text-align:left
    .reply-wrap
      .reply-item
        display:flex
        padding:10px
        border-bottom:2px solid $color-border
        .avatar-wrap
          flex:0 0 60px
          width:60px
          .avatar
            width:48px
            height:48px
            border-radius: 50%
        .reply-disc
          flex:1
          text-align:left
          .uname
            font-size:$font-size-medium
            color:$color-text
            margin-bottom:10px

</style>
