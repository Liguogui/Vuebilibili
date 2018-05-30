<template>
   <div class="area-single-vedio" v-if="videoList.length">
     <area-title :title="title" :disc="disc"></area-title>
     <video-single :videoList="videoList" @selectItem="selectItem"></video-single>
   </div>
</template>

<script type='text/ecmascript-6'>
  import AreaTitle from 'components/area-title/area-title'
  import VideoSingle from 'components/video-single/video-single'
    export default{
      props:{
        title:{
          type:String,
          default:'热门推荐'
        },
        disc:{
          type:String,
          default:'查看更多'
        },
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
      },
      components:{
        AreaTitle,
        VideoSingle
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
