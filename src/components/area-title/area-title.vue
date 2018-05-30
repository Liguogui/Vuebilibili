<template>
   <div class="area-title">
      <div class="title">{{title}}</div>
      <div class="disc">{{disc}}</div>
   </div>
</template>

<script type='text/ecmascript-6'>
    export default{
      props:{
        title:{
          type:String,
          default:'热门推荐'
        },
        disc:{
          type:String,
          default:'查看更多'
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .area-title
    width:100%
    box-sizing:border-box
    padding:10px
    clear()
    .title
      float:left
      font-size:$font-size-medium-x
    .disc
      float:right
      font-size:$font-size-small-s
      color:$color-text
</style>
