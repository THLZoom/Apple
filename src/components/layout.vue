<template>
  <div class="indexBox" name="index">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <Aside></Aside>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.name}}</strong>
            </el-col>
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './header'
import Aside from './aside'
export default {
  name: 'index',
  components: {
    Header,Aside
  },
  data (){
    return {

    }
  } 
}
</script>

<style>
.indexBox{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header{
  display: flex;
  background: #409EFF;
}
.content-container{
  width: 100%;
  padding: 10px 20px;
  overflow-y: auto;
}
.grid-content{
  height: 100%;
}
.breadcrumb-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title{
  width: 200px;
  color: #475669;
  text-align: left;
  font-size: 14px;
}
.content-wrapper{
  height: calc(100% - 19px);
}

.el-menu-item, .el-submenu__title{
  height: 40px!important;
  line-height: 40px!important;
}
.pagination{
  background: #f2f2f2;
  padding: 10px;
  text-align: left;
}
th{
  background: #ddd!important;
}
.toolbar{
  height: 40px;
  background: #f2f2f2;
  margin: 10px 0;
  padding: 10px 10px 0 10px;
}
.icon-caidan{
  font-size: 22px !important;
}
</style>
