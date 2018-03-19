import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)
const routes = [];

const router = new Router({
  routes
});

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

export default router