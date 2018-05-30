<template>
   <div ref='wrapper'>
      <slot></slot>
   </div>
</template>

<script type='text/ecmascript-6'>
  import BScroll from 'better-scroll'

    export default{
        props:{
          probeType:{ //probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在momentum滚动动画运行过程中实时派发 scroll 事件
            type:Number,
            default:3
          },
          click:{  //初始化时需要用到,允许点击
            type:Boolean,
            default:true
          },
          data:{
            type:Array, //监听传进来的数据，如有变化立即刷新，必设属性
            default:null
          },
          listenScroll:{ //允许触发滚动事件
            type:Boolean,
            default:false
          },
          pullup:{  //允许触发滚动到底事件，基本上就是下拉刷新
            type:Boolean,
            default:false
          },
          beforeScroll:{ //允许触发开始滚动事件
            type:Boolean,
            default:false
          },
          refreshDelay:{ //可以设置scroll组件刷新时间,一般是内含transition-group动画时需要设置，参考值100
            type:Number,
            default:20
          }
        },
        mounted(){
          setTimeout(()=>{
            this._initScroll();
          },20)
        },
        methods:{
          _initScroll(){
            if(!this.$refs.wrapper){
              return;
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
              probeType:this.probeType,
              click:this.click
            });

            if(this.listenScroll){
              let me = this;
              this.scroll.on('scroll',(pos)=>{ //pos是一个对象,有X和Y的属性,{x: 0, y: -146.6669921875}
                me.$emit('scroll',pos);
              });
            }

            if(this.pullup){
              this.scroll.on('scrollEnd',()=>{ //scrollEnd是滚动停止了
                if(this.scroll.y <= (this.scroll.maxScrollY + 50)){ //maxScrollY是一个负值
                  this.$emit('scrollToEnd')//scrollToEnd滚动快到底了
                }
              });

              if(this.beforeScroll){
                this.scroll.on('beforeScrollStart',()=>{
                  this.$emit('beforeScroll');
                });
              }
            }
          },
          enable(){
            this.scroll && this.scroll.enable();
          },
          disable(){
            this.scroll && this.scroll.disable();
          },
          refresh(){
            this.scroll && this.scroll.refresh();
          },
          scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments);
          },
          scrollToElement(){
            this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments);
          },
          getScrollY(){
            return this.scroll.maxScrollY;
          }
        },
        watch:{
          data(){
            setTimeout(()=>{
              this.refresh();
            },this.refreshDelay)
          }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
