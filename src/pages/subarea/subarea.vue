<template>
   <div class="subarea">
      <ul class="subarea-wrap" v-if="subareaList.length">
        <li class="subarea-item" v-for="(item,index) of subareaList" :key="index">
          <div class="icon-wrap">
            <i class="iconfont icon-dianshiji"></i>
          </div>
          <div>{{item}}</div>
        </li>
      </ul>
   </div>
</template>

<script type='text/ecmascript-6'>
  import {getSubarea} from 'api/subarea/subarea'
  import {ERR_OK} from 'api/config'

  export default {
    data(){
      return{
        subareaList:[]
      }
    },
    created() {
      this._getSubarea();

    },
    methods: {
      _getSubarea() {
        getSubarea().then((res) => {
          if(res.code === ERR_OK){
            this.subareaList = res.data
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .subarea
    .subarea-wrap
      clear()
      .subarea-item
        width: 25%
        box-sizing:border-box
        padding:20px 0
        float:left
        text-align:center
        .icon-wrap
          font-size:$font-size-large-max
</style>
