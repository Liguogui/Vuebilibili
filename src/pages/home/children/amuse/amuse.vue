<template>
   <scroll class="amuse" :data="rankList">
     <div>
      <rank :rankList="rankList" @selectItem="selectItem"></rank>
     </div>
   </scroll>
</template>

<script type='text/ecmascript-6'>
  import Rank from 'components/rank/rank'
  import Scroll from 'base/scroll/scroll'
  import {getAmuseRank} from 'api/home/amuse/amuse'
  import {ERR_OK} from 'api/config'
  import {selectMixin} from 'common/js/mixins'
    export default{
      mixins:[selectMixin],
      data(){
        return {
          rankList:[]
        }
      },
      created(){
        this._getAmuseRank()
      },
      methods:{
        _getAmuseRank(){
          getAmuseRank().then((res)=>{
            if(res.code === ERR_OK){
              res.data.list.length>=30 ?this.rankList=res.data.list.splice(0,30):this.rankList=res.data.list
            }
          })
        }
      },
      components:{
        Scroll,
        Rank
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  .amuse
    position:fixed
    width:100%
    top:84px
    bottom:60px
    overflow:hidden
</style>
