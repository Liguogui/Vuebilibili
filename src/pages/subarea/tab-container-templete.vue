<template>
  <div>
    <div class="nav-wrap">
      <div class="nav" :class="getNavCli(item.id)" @click="move(item.id)" v-for="(item,index) of array" :key="index">
        {{item.text}}
      </div>
    </div>
    <scroll class="malegebi">
      <mt-tab-container v-model="active" :swipeable="swipeable">
      <mt-tab-container-item id="tab-container1">
        <scroll :data="cellList" :pullup="pullup" @scrollToEnd="_getMore">
          <div>
            <mt-cell v-for="n in cellList" :title="getTitle(n)"></mt-cell>
          </div>
        </scroll>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 40" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 30" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    </scroll>
  </div>

</template>

<script type='text/ecmascript-6'>
  import Scroll from 'base/scroll/scroll'
    export default{
      data(){
        return{
          active: 'tab-container1',
          swipeable:true,
          array:[{
            id:'tab-container1',
            text:'1'
          },{
            id:'tab-container2',
            text:'2'
          },{
            id:'tab-container3',
            text:'3'
          }],
          cellList:15,
          pullup:true
        }
      },
      methods:{
        move(id){
          this.active = id
        },
        getNavCli(id){
          return this.active === id ? 'nav-active' :''
        },
        _getMore(){
          this.cellList += 20;
        },
        getTitle(n){
          return `tab-container${n}`
        }
      },
      components:{
        Scroll
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
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
