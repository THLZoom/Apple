<template>
  <div class="students_info">
    <el-table v-loading="loading" :data="tableData" ref="tableData" :border="true" style="width: 100%;" size="mini" @select="getSelectData" @select-all="clearSelect">
        <el-table-column type="selection" width="55" :resizable="false" align="center" fixed="left"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="120" align="left" show-overflow-tooltip></el-table-column>
        <el-table-column prop="giveresult" label="领取状态" min-width="100" align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.giveresult == 0" size="medium">未领取</el-tag>
            <el-tag v-else-if="scope.row.giveresult == 1" size="medium">已领取</el-tag>
            <el-tag v-else-if="scope.row.giveresult == 2" size="medium">已领取</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="giveresult" label="充值状态" min-width="100" align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.giveresult == 1" size="medium">未充值</el-tag>
            <el-tag v-if="scope.row.giveresult == 2" size="medium">已充值</el-tag>
            <el-tag v-if="scope.row.giveresult == 3" size="medium">充值失败</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="errmsg" label="失败原因" min-width="100" align="left" show-overflow-tooltip></el-table-column>
        <el-table-column prop="subscribe" label="关注状态" min-width="100" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.subscribe == 1" size="medium">已关注</el-tag>
            <el-tag type="danger" v-else-if="scope.row.subscribe == 0" size="medium">未关注</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="绑定状态" min-width="100" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 1" size="medium">已绑定</el-tag>
            <el-tag type="danger" v-else-if="scope.row.status == 2" size="medium">未绑定</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="custphone" label="绑定号码" min-width="100" align="left"></el-table-column>
        <el-table-column prop="fist_bind_time" label="首绑时间" min-width="140" align="left"></el-table-column>
        <el-table-column prop="givegifttime" label="领取时间" min-width="140" align="left"></el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  name: 'students_info',
  data(){
    return {
    }
  },
}
</script>
<style scoped>
  .students_info{
    height: 100%;
  }
</style>


