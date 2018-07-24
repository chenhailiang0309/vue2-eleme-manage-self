<template>
  <div>
    <head-top></head-top>
    <visitor-pie :pieData="pieData"></visitor-pie>
  </div>
</template>
<script>
import headTop from '../components/headTop'
import visitorPie from '@/components/visitorPie'
import { getUserCity } from '@/api/getData'
export default {
  data() {
    return {
      pieData: {},
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      try {
        const res = await getUserCity();
        console.log(res.data)
        if (res.data.status == 1) {
          this.pieData = res.data.user_city;
        } else {
          throw new Error(res.data)
        }
      } catch (err) {
        console.log('获取用户分布信息失败', err);
      }
    },
  },
  components: {
    headTop,
    visitorPie
  }
}

</script>
<style lang="less">
@import '../style/mixin';

</style>
