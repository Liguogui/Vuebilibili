<template>
  <div class="wrapper-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
                    :key="item.id"
      >
        <a :href="item.linkUrl">
          <img :src="item.picUrl"
               class="swiper-img"
               @load="load"
               alt="">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
  //基于swiper3版本
  export default{
    props:{
      swiperList:Array
    },
    data (){
      return {
        swiperOption:{
          pagination: '.swiper-pagination',    //分页器
          paginationClickable :true,           //分页器可以点击
          loop:true,                           //支持循环
          autoplay:3000,                       //自动切换
          autoplayDisableOnInteraction : false  //用户操作swiper之后，是否禁止autoplay
        }
      }
    },
    methods:{
      load(){
        this.$emit('load');
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  .wrapper-swiper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper-swiper
    overflow:hidden
    width: 100%
    height: 0
    padding-bottom:40.8% //以图片的100%宽度计算高宽比
    //background: #eee;
    .swiper-img
      width: 100%

</style>
