<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="180">
        </el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户姓名" width="220">
        </el-table-column>
        <el-table-column prop="city" label="注册地址">
        </el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: center;margin-top: 10px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import headTop from '@/components/headTop'
import { baseUrl } from '@/config/env.js'
import { getAll_userCount, getUserList } from '@/api/getData'
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
      count: 0,
      offset: 0,
      limit: 20,
      currentPage: 1,
    }
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      try {
        const countData = await getAll_userCount()
        if (countData.data.status == 1) {
          this.count = countData.data.count
        } else {
          throw new Error('获取数据失败')
        }
        this.getUsers()
      } catch (e) {
        console.log('获取数据失败', err)
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getUsers()
    },
    async getUsers() {
      const Users = await getUserList(this.offset);
      this.tableData = [];
      Users.data.forEach(item => {
        const tableData = {};
        tableData.username = item.username;
        tableData.registe_time = item.registe_time;
        tableData.city = item.city;
        this.tableData.push(tableData)
      })
    }
  },
  components: {
    headTop
  }
}

</script>
<style lang="less" scoped>
.table_container {
  padding: 20px;
}

</style>
