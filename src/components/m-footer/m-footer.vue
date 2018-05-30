<template>
   <div class="m-footer">
     <router-link tag="div" class="tab-item" to="/home">
       <div class="tab-icon">
         <i class="iconfont icon-shouye"></i>
       </div>
       <div class="tab-link">
         <span>首页</span>
       </div>
     </router-link>
     <router-link tag="div" class="tab-item" to="/subarea">
       <div class="tab-icon">
         <i class="iconfont icon-fenquweixuanzhong"></i>
       </div>
       <div class="tab-link">
         <span>分区</span>
       </div>
     </router-link>
     <router-link tag="div" class="tab-item" to="/serialization">
       <div class="tab-icon">
         <i class="iconfont icon-iconfontdongtai"></i>
       </div>
       <div class="tab-link">
         <span>连载动画</span>
       </div>
     </router-link>
     <router-link tag="div" class="tab-item" to="/finish">
       <div class="tab-icon">
         <i class="iconfont icon-xiazai49"></i>
       </div>
       <div class="tab-link">
         <span>完结动画</span>
       </div>
     </router-link>
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
  .m-footer
    width:100%
    height: 60px
    display: flex
    position:fixed
    bottom:0
    z-index:999
    background-color: #fff
    .tab-item
      flex: 1
      text-align:center
      .tab-icon
        margin:0 auto
        padding-top:5px
        padding-bottom:5px
        .iconfont
          font-size: 30px
      .tab-link
        margin:0 auto
        font-size:$font-size-medium
      &.router-link-active
          color: $color-pink
</style>
