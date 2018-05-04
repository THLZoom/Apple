<template>
  <div class="students_info">
    <div class="tools">
      <el-input class="stuInfo" v-model="stuInfo.stu_name" placeholder="姓名" size="mini"></el-input>
      <el-input class="stuInfo" v-model="stuInfo.stu_class" placeholder="班级" size="mini"></el-input>
      <el-input class="stuInfo" v-model="stuInfo.stu_age" placeholder="年龄" size="mini"></el-input>
      <el-button class="addBtn" type="primary" icon="el-icon-plus" size="mini" @click="addStu"></el-button>
    </div>
    
    <el-table v-loading="loading" :data="tableData" ref="tableData" :border="true" style="width: 100%;" size="mini">
      <el-table-column type="selection" width="55" header-align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="left"></el-table-column>
      <el-table-column prop="class" label="班级" align="left"></el-table-column>
      <el-table-column prop="age" label="年龄" align="left"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="deleteStu(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'students_info',
  data(){
    return {
      tableData: [], //表格数据
      loading: false, //显示loading判断条件
      stuInfo: {
        stu_name: '',  //学生姓名
        stu_class: '', //学生班级
        stu_age: '', //学生年龄
      }
      
    }
  },
  methods:{
    //获取学生信息
    getStuInfo(){
      this.axios.get('test/user/users')
      .then(res => {
        console.log(res)
        this.tableData = res.data.data;
      })
    },
    //添加学生信息
    addStu(){
      let info = this.stuInfo;
      //添加信息不能为空
      if(Object.keys(info).find(a => info[a] == '')){
        this.$message({
          message:'信息不可为空',
          type: 'warning'
        })
        return
      }
      this.axios.post('test/user/add',{
        name: this.stuInfo.stu_name,
        class: this.stuInfo.stu_class,
        age: this.stuInfo.stu_age,
      })
      .then(res => {
        console.log(res);
        Object.keys(info).map(a => info[a] = '');
        this.getStuInfo();
      })
      //清空输入框数据
    },
    //删除学生信息
    deleteStu(row){
      this.$confirm(`确认要删除${row.name}的信息吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        this.tableData = [];
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
              
      });
    }
  },
  mounted:function(){
    this.getStuInfo();
  }
}
</script>
<style scoped>
  .students_info{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .tools{
    min-width: 600px;
    height: 50px;
    background: #f2f2f2;
    padding: 10px 10px;
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .stuInfo{
    width: 15%;
    min-width: 150px; 
    margin-left: 20px;
  }
  .addBtn{
    margin-left: 20px;
  }
</style>


