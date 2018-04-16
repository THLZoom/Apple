import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    collapsed: false,
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    collapse (state){
      state.collapsed = state.collapsed?false:true;
    },
  },
  actions: {
    
  },
  modules: {

  }
});