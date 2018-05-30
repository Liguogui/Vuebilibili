<template>
   <div class="m-header">
     <div class="header-item cebianlan">
       <i class="iconfont icon-cebianlan"></i>
     </div>
      <router-link tag="div" class="header-item header-sousuo" to="/subarea">
        <span class="search-wrapper">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </router-link>
     <div class="header-item">
       <i class="iconfont icon-icon"></i>
     </div>
      <div class="header-item">
        <i class="iconfont icon-pinglun2"></i>
      </div>
      <div class="header-item">
        <i class="iconfont icon-gengduoda"></i>
      </div>
   </div>
</template>

<script type='text/ecmascript-6'>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .m-header
    width: 100%
    height: 44px
    overflow: hidden
    display:flex
    align-items: center
    line-height: 44px
    background-color: $color-pink
    color:#fff
    font-size:22px
    .header-item
      flex:1
      &.header-sousuo
        box-sizing:border-box
        flex:0 0 200px
        height: 25px
        line-height: 25px
        text-align:left
        font-size:14px
        background-color: rgba(255,51,102,0.5)
        border-radius:10px
        .search-wrapper
          margin-left:5px




</style>
