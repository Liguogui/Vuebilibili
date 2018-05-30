import * as types from './mutation-types'

const mutations = {
  [types.SET_VIDEO](state,video){
    state.video = video
  },
  [types.SET_SHOW_PLAY_HTML](state,flag){
    state.showPlayHtml = flag
  },
  [types.SET_PLAYING](state,flag){
    state.playing = flag
  }
}

export default mutations
