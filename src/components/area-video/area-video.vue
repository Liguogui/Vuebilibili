<template>
   <div class="area-video" v-if="videoList.length">
     <area-title :title="title" :disc="disc"></area-title>
     <video-list :videoList="videoList" @load="load" @selectItem="selectItem"></video-list>
   </div>
</template>

<script type='text/ecmascript-6'>
    import AreaTitle from 'components/area-title/area-title'
    import VideoList from 'components/video-list/video-list'
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
        },
        load(){
          this.$emit('load')
        }
      },
      components:{
        AreaTitle,
        VideoList
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
