<template>
   <scroll class="cartoon" ref="scroll">
     <div>
      <area-single :title="titleLZFJ" :disc="discLZFJ" :videoList="RELZFJList" @selectItem="selectItem"></area-single>
      <area-single :title="titleWJFJ" :disc="discWJFJ" :videoList="REWJFJList" @selectItem="selectItem"></area-single>
      <area-single :title="titleGCDH" :disc="discGCDH" :videoList="REGCDHList" @selectItem="selectItem"></area-single>
     </div>
   </scroll>
</template>

<script type='text/ecmascript-6'>
  import AreaSingle from 'components/area-single/area-single'
  import Scroll from 'base/scroll/scroll'
  import {getRELZFJList,getREWJFJList,getREGCDHList} from 'api/home/recommend/recommend'
  import {ERR_OK} from 'api/config'
  import {selectMixin} from 'common/js/mixins'

    export default{
      mixins:[selectMixin],
      data(){
        return {
          titleLZFJ:'连载番剧',
          discLZFJ:'',
          RELZFJList:[],
          titleWJFJ:'完结番剧',
          discWJFJ:'',
          REWJFJList:[],
          titleGCDH:'国产动画',
          discGCDH:'',
          REGCDHList:[]
        }
      },
      created(){
        this._getRELZFJList();
        this._getREWJFJList();
        this._getREGCDHList();
      },
      methods:{
        _getRELZFJList(){
          getRELZFJList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=6){
                res.data.length>=6 ?this.RELZFJList = res.data.splice(0,6):this.RELZFJList = res.data
              }
            }
          })
        },
        _getREWJFJList(){
          getREWJFJList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=6){
                res.data.length>=6 ?this.REWJFJList = res.data.splice(0,6):this.REWJFJList = res.data
              }
            }
          })
        },
        _getREGCDHList(){
          getREGCDHList().then((res)=>{
            if(res.code === ERR_OK){
              if(res.data.length>=6){
                res.data.length>=6 ?this.REGCDHList = res.data.splice(0,6):this.REGCDHList = res.data
              }
            }
          })
        },
      },
      components:{
        Scroll,
        AreaSingle
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .cartoon
    position:fixed
    width:100%
    top:84px
    bottom:60px
    overflow:hidden
</style>
