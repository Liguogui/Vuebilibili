<template>
  <div class="serialization">
    <serialization-tab></serialization-tab>
    <router-view></router-view>
  </div>

</template>

<script type='text/ecmascript-6'>
  import SerializationTab from './components/serializatiion-tab'
  export default{
    components:{
      SerializationTab
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
