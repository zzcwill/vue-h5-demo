<template>
  <div :id="domId" class="chart"></div>
</template>

<script>
import { topicsApi } from '@/api/user';
import * as echarts from 'echarts';

export default {
  name: 'chart2',
  data() {
    return {
      domId: 'chart2',
      chart: null,
      colorArr: ['#E086CE', '#8184D6'],
      seriesName: ['征信平均时效', '签约平均时效'],
      xAxisData: ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07'],
      yAxisName: '平均分钟',
      seriesData: [
        [0, 20, 15, 40, 50, 70, 100],
        [0, 10, 15, 20, 25, 30, 40]
      ]
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  destroyed() {},
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.domId));
      this.setOptions();
    },
    setOptions() {
      let option = {
        backgroundColor: '#FFF',
        title: {
          top: 20,
          text: '',
          textStyle: {
            // fontWeight: 'normal',
            fontSize: 12,
            color: '#333'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#FFF'
            }
          }
        },
        legend: {
          top: 10,
          icon: 'circle',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#333'
          }
        },
        grid: {
          top: 60,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#E5E5E5'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#333'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: this.yAxisName,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#333'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#333'
              }
            }
          }
        ],
        series: [
          {
            name: this.seriesName[0],
            type: 'bar',
            stack: 'vistors',
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: this.colorArr[0],
                borderColor: this.colorArr[0]
              }
            },
            data: this.seriesData[0]
          },
          {
            name: this.seriesName[1],
            type: 'bar',
            stack: 'vistors',
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: this.colorArr[1],
                borderColor: this.colorArr[1]
              }
            },
            data: this.seriesData[1]
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="less">
.chart {
  width: 750px;
  height: 450px;
}
</style>
