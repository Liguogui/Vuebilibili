<template>
  <div class="home-tab">
    <router-link tag="div" class="tab-item" to="/home/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/cartoon">
      <span class="tab-link">追番</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/amuse">
      <span class="tab-link">鬼畜大作战</span>
    </router-link>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{

  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .home-tab
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
