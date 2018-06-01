<template>
  <div class="finish">
    <div class="nav-wrap">
      <div class="nav" :class="getNavCli(item.id)" @click="changeTabItem(item.id)" v-for="(item,index) of array" :key="index">
        {{item.text}}
      </div>
    </div>
    <scroll class="malegebi" ref="scroll">
      <mt-tab-container class="madan" v-model="active" :swipeable="swipeable">
      <mt-tab-container-item id="tab-container-new">
        <finish-latest></finish-latest>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container-hot">
        <finish-hot></finish-hot>
      </mt-tab-container-item>
    </mt-tab-container>
    </scroll>
  </div>

</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
  import FinishHot from 'pages/finish/components/hot/hot'
  import FinishLatest from 'pages/finish/components/latest/latest'
  export default{
    data(){
      return{
        active: 'tab-container-new',
        swipeable:true,
        array:[{
          id:'tab-container-new',
          text:'最新视频'
        },{
          id:'tab-container-hot',
          text:'热门推荐'
        }]
      }
    },
    methods:{
      changeTabItem(id){
        this.active = id
      },
      getNavCli(id){
        return this.active === id ? 'nav-active' :''
      }
    },
    components:{
      Scroll,
      FinishHot,
      FinishLatest
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "~common/stylus/variable"
  .nav-wrap
    display:flex
    .nav
      flex:1
      box-sizing:border-box
      height: 40px
      line-height:40px
      text-align:center
      background:#ffffff
      &.nav-active
        color:#ff8800
        border-bottom:1px solid #ff8800
  .malegebi
    position:fixed
    left:0
    right:0
    top:84px
    bottom:60px
    overflow:hidden
</style>
