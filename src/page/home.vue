<template>
  <div>
    <head-top></head-top>
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4">
          <div class="data_list today_head"><span class="data_num head">当日数据：</span></div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{dayUserCount}}</span> 新增用户</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{dayorderCount}}</span> 新增订单</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{dayAdminCount}}</span> 新增管理员</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="data_list all_head"><span class="data_num head">总数据：</span></div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div>
        </el-col>
      </el-row>
    </section>
    <tendency :sevenData='sevenData' :sevenDay='sevenDay'></tendency>
  </div>
</template>
<script type="text/javascript">
import { getDay_userCount, getDay_orderCount, getDay_adminCount, getAll_userCount, getAll_orderCount, getAll_adminCount } from '@/api/getData'
import { baseUrl } from '@/config/env.js'
import dtime from 'time-formater'
import tendency from '@/components/tendency'
import headTop from '@/components/headTop'
export default {
  data() {
    return {
      dayUserCount: null,
      dayorderCount: null,
      dayAdminCount: null,
      allUserCount: null,
      allOrderCount: null,
      allAdminCount: null,
      sevenDay: [],
      sevenData: [
        [],
        [],
        []
      ]
    }
  },
  created() {
    this.initData();
    for (let i = 6; i > -1; i--) {
      const date = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD')
      this.sevenDay.push(date)
    }
    this.getSevenData()
  },
  methods: {
    // 获取七天数据
    getSevenData() {
      const apiArr = [
        [],
        [],
        []
      ];
      /*this.sevenDay.forEach(async(item) => {
        const dayuser = await getDay_userCount(item)
        apiArr[0].push(dayuser.data.count)

        const dayorder = await getDay_orderCount(item)
        apiArr[1].push(dayorder.data.count)

        const dayadmin = await getDay_adminCount(item)
        apiArr[2].push(dayadmin.data.count)
      })*/

      this.sevenDay.forEach((item) => {
        const dayuser = getDay_userCount(item)
        apiArr[0].push(dayuser)

        const dayorder = getDay_orderCount(item)
        apiArr[1].push(dayorder)

        const dayadmin = getDay_adminCount(item)
        apiArr[2].push(dayadmin)
      })

      const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]]
      Promise.all(promiseArr).then(res => {
        const resArr = [
          [],
          [],
          []
        ];
        res.forEach((item, index) => {
          if (item.data.status == 1) {
            resArr[Math.floor(index / 7)].push(item.data.count)
          }
        })
        this.sevenData = resArr;
      }).catch(err => {
        console.log(err)
      })
    },
    initData() {
      const today = dtime().format('YYYY-MM-DD')
      this.fn_getDayUserCount(today)
      this.fn_getDayOrderCount(today)
      this.fn_getDayAdminCount(today)
      this.fn_getAllUserCount()
      this.fn_getAllOrderCount()
      this.fn_getAllAdminCount()
    },
    // 获取一天的注册用户数量
    async fn_getDayUserCount(day) {
      try {
        const num = await getDay_userCount(day)
        this.dayUserCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
    // 获取一天的订单数量
    async fn_getDayOrderCount(day) {
      try {
        const num = await getDay_orderCount(day)
        this.dayorderCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
    // 获取一天的注册管理员数量
    async fn_getDayAdminCount(day) {
      try {
        const num = await getDay_adminCount(day)
        this.dayAdminCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
    // 获取所有的用户数量
    async fn_getAllUserCount() {
      try {
        const num = await getAll_userCount()
        this.allUserCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
    // 获取所有的订单数量
    async fn_getAllOrderCount() {
      try {
        const num = await getAll_orderCount()
        this.allOrderCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
    // 获取所有的管理员数量
    async fn_getAllAdminCount() {
      try {
        const num = await getAll_adminCount()
        this.allAdminCount = num.data.count
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    headTop,
    tendency,
  },
}

</script>
<style lang="less" scoped>
@import '../style/mixin';
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #E5E9F2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #FF9800;
  }
  .all_head {
    background: #20A0FF;
  }
}

</style>
