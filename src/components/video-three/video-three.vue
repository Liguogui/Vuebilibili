<template>
   <div class="video-three" v-if="videoList.length">
      <ul class="video-wrap">
        <li class="video-item" @click="selectItem(item)" v-for="(item,index) of videoList" :key="item.season_id">
          <div class="item-wrap">
            <div class="img-wrap">
              <img class="img" v-lazy="item.cover" @load="load"/>
            </div>
            <div class="title">{{item.title}}</div>
          </div>
        </li>
      </ul>
   </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      videoList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      selectItem(item){
        this.$emit('selectItem',item)
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
  .video-wrap
    clear()
    .video-item
      width: 33.3%
      height:208px
      float:left
      box-sizing:border-box
      padding:10px 5px
      overflow:hidden
      .item-wrap
        width: 100%
        height:188px
        overflow:hidden
        background-color: $color-white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
        .img-wrap
          position:relative
          width:100%
          height:151px
          background-color: $color-background
          .img
            width:100%
            height:151px
          .img[lazy=loading]
            width:40px
            height:40px
            position:absolute
            top: 50%
            left: 50%
            transform:translate3d(-50%,-50%,0)
        .title
          padding-top:5px
          text-align:left
          font-size:$font-size-medium
</style>
