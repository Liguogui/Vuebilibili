<template>
  <div class="serialization-tab">
    <router-link tag="div" class="tab-item" to="/serialization/latest">
      <span class="tab-link">最新视频</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/serialization/hot">
      <span class="tab-link">热门推荐</span>
    </router-link>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{

  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .serialization-tab
    width:100%
    height:40px
    display:flex
    margin: 0 auto
    line-height:40px
    background-color: #fff
    .tab-item
      flex:1
      text-align: center
      .tab-link
        padding-bottom: 5px
      &.router-link-active
        color: $color-pink
        border-bottom: 2px solid $color-pink
</style>
