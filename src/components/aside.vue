<template>
  <div class="aside" style="text-align: left;">  
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :class="{isOverflow:!isCollapse}" :router="true" @open="handleOpen" @close="handleClose"  :collapse="isCollapse" :unique-opened="true">
      <template v-for="(value,i) in $router.options.routes" v-if="!value.hidden">

        <!-- 有子菜单一级菜单 -->
        <el-submenu :index="i+''" v-if="!value.leaf" :key="i">
          <template slot="title">
            <i :class="value.icons"></i>
            <span slot="title">{{value.name}}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-for="(child,key) in value.children">
            <el-menu-item :index="child.path" :key="key" style="padding-left: 53px!important">{{child.name}}</el-menu-item>
          </template>
        </el-submenu>

        <!-- 无子菜单的一级菜单 -->
        <el-menu-item :index="value.children[0].path" v-if="value.leaf && value.children.length>0" :key="i">
          <i :class="value.icons"></i>
          <span slot="title">{{value.children[0].name}}</span>
        </el-menu-item>

      </template>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'indexAside',
  data (){
    return {
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(this.$router.options.routes);
    }
  },
  computed: {
    //水平折叠
    isCollapse () {
      return this.$store.state.collapsed
    }
  }

}
</script>

<style scoped>
  .el-menu--collapse{
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .el-menu{
    background: #eef1f6;
    
  }
  ::-webkit-scrollbar{
    display:none;
  }
  .isOverflow{
    overflow-y: auto;
  }
  .el-submenu .el-menu-item{
    background: #e4e8f1;
  }
  .iconfont{
    font-size: 20px;
    margin-right: 9px;
  }

</style>

