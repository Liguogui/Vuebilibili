import {mapMutations} from 'vuex'

export const setNumMixin = {
  methods:{
    normalizationNum(num){
      if(num <= 9999){
        return num
      }
      else{
        return (num/10000).toFixed(1) + '万'
      }
    },
    normalizationTime(value){
      if(typeof value === 'number'){
        let strValue;
        value<60 ? strValue = value +'00' : strValue = value +''
        let arrValue = strValue.split('') //['1','4','5','0']
        let endArr = arrValue.splice(arrValue.length-2,2) //['5','0']
        return arrValue.join('')+':'+endArr.join('')
      }
      else{
        return value
      }
    }
  }
}

export const selectMixin = {
  methods:{
    selectItem(item){
      this.setVideo(item);
      this.setShowPlayHtml(true);
    },
    ...mapMutations({
      setVideo:'SET_VIDEO',
      setShowPlayHtml:'SET_SHOW_PLAY_HTML'
    })
  }
}
