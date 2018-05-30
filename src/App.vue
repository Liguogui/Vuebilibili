<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <m-footer></m-footer>
    <play-html></play-html>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MFooter from 'components/m-footer/m-footer'
import PlayHtml from 'components/play-html/play-html'
export default {
  name: 'App',
  components:{
    MHeader,
    MFooter,
    PlayHtml
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
