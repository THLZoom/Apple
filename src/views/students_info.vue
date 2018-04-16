<template>
  <div class="students_info">
    <el-table v-loading="loading" :data="tableData" ref="tableData" :border="true" style="width: 100%;" size="mini">
      
    </el-table>
    <div class="tools"></div>
  </div>
</template>
<script>
export default {
  name: 'students_info',
  data(){
    return {
      tableData: [],
      loading: false,
    }
  },
}
</script>
<style scoped>
  .students_info{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .tools{
    width: 100%;
    height: 50px;
    background: #f2f2f2;
    padding: 10px 10px 0;
    margin: 10px 0;
    align-self: flex-end;
  }
</style>


