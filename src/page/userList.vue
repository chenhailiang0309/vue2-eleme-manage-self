<template>
  <div class="fillcontain">
    <!-- <head-top></head-top> -->
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script type="text/javascript">
import {baseUrl} from '@/config/env.js'
export default {
  data() {
    return {
      tableData: [{
        registe_time: '2016-05-02',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1518 弄'
      }, {
        registe_time: '2016-05-04',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1517 弄'
      }, {
        registe_time: '2016-05-01',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1519 弄'
      }, {
        registe_time: '2016-05-03',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1516 弄'
      }],
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http({
          url: baseUrl + '/v1/users/count',
          method: 'GET'
        })
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>
<style lang="less" scoped>


</style>
