<template>
  <div class="indexHeader">
    <div class="header-left">
      <span style="color: #fff;font-size: 20px;">学生信息</span>
      <el-button type="primary" size="mini" icon="iconfont icon-caidan" @click.prevent="changeCollapse" style="margin-top: 2px;"></el-button>
    </div>
    <el-dropdown trigger="click" :show-timeout="1" :hide-timeout="1" @command="signOut">
      <span class="el-dropdown-link userName">
        龚满春
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>注销登陆</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  name: 'indexHeader',
  data (){
    return {
      userImg: ''
    }
  },
  methods: {
    //折叠导航栏
		changeCollapse(){
      this.$store.commit('collapse');
		},
    signOut(){
      // this.$confirm('将要退出登陆, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   localStorage.removeItem('userName');
      //   this.$message({
      //     type: 'success',
      //     message: '注销成功!'
      //   });
      //   this.$router.push('/login')
      // }).catch(() => {
        
      // });
    }
  }

}
</script>

<style scoped>
  .indexHeader{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h2,i{
    color: #fff;
  }
  .header-left{
    display: flex;
    align-items: center;
  }
  .el-dropdown{
    display: flex;
    align-items: center;
  }
  .userName{
    cursor: pointer;
    color: #fff;
  }

</style>
