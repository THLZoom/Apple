import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
//布局
import Layout from '../components/layout'
//未找到
import NoFound from '../components/404'
//水果
import Fruits from '../views/fruits'

Vue.use(Router)

//路由路径表
const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {path: '/',redirect: '/Fruits'},
      {path: '/Fruits',component: Fruits},
    ]
  }
];
//挂载路由表
const router = new Router({
  routes
});
//切换页面的loading
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
//导出路由实例
export default router