<template>
  <div class="finish">
    <finish-tab></finish-tab>
    <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
  import FinishTab from './components/finish-tab/finish-tab'
  export default{
    components:{
      FinishTab
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
