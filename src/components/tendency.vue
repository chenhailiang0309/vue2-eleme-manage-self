<template>
  <div class="line1">
    <div id="line1" style="width: 90%;height: 450px;"></div>
  </div>
</template>
<script type="text/javascript">
import echarts from 'echarts/lib/echarts'
// 按需引入
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/tooltip';
export default {
  mounted(){
  	this.myChart = echarts.init(document.getElementById('line1'));
  	
  }
}

</script>
<style lang="less" scoped></style>
