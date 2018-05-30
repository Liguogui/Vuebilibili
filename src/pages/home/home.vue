<template>
   <div>
      <home-tab></home-tab>
      <router-view></router-view>
   </div>
</template>

<script type='text/ecmascript-6'>
  import HomeTab from './components/home-tab/home-tab'
    export default{
        data(){
            return{

            }
        },
        components:{
          HomeTab
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
