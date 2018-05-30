<template>
   <div class="video-single" v-if="videoList.length">
     <ul class="video-wrap">
       <li class="video-item" v-for="(item,index) of videoList" :key="item.aid">
         <div class="video-link" @click="selectItem(item)" >
           <div class="img-wrap">
              <img class="item-img" v-lazy="item.pic"/>
           </div>
           <div class="disc-wrap">
               <div class="title">{{item.title}}</div>
               <div class="typename">{{item.typename}}</div>
           </div>
         </div>
       </li>
     </ul>
   </div>
</template>

<script type='text/ecmascript-6'>
    export default{
      props:{
        videoList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        selectItem(item){
          this.$emit('selectItem',item)
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .video-wrap
    width: 100%
    box-sizing:border-box
    padding:0 10px
    .video-item
      margin-bottom:10px
      background-color: #fff
      box-shadow: 0 1px 4px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
      .video-link
        display:block
        width: 100%
        height: 100%
        .img-wrap
          width: 100%
          height:0
          padding-bottom:33.3%
          overflow:hidden
          .item-img
            width:100%
            transform:translate3d(0,-15%,0)
        .disc-wrap
          text-align:left
          padding:10px
          .title
            no-wrap()
            color:$color-text-b
            margin-bottom:10px
</style>
