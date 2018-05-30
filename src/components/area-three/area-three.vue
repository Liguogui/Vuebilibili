<template>
  <div class="area-three" v-if="videoList.length">
    <area-title :title="title" :disc="disc"></area-title>
    <video-three :videoList="videoList" @load="load" @selectItem="selectItem"></video-three>
  </div>
</template>

<script type='text/ecmascript-6'>
  import AreaTitle from 'components/area-title/area-title'
  import VideoThree from 'components/video-three/video-three'
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
      VideoThree
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
