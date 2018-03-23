import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
//布局
import Layout from '../components/layout'
//未找到
import NoFound from '../components/404'
//学生信息页
import Students_info from '../views/students_info'

Vue.use(Router)

//路由路径表
const routes = [
  {
    path: '/',
    component: Layout,
    name: '',   //无二级菜单则为空
    leaf: true,   //无二级菜单为true
    icons: 'iconfont icon-xuesheng',   //菜单节点图标
    children: [
      {path: '/Students_info',component: Students_info,name: '学生信息'},
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