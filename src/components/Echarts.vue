<template>
  <chart :options="pieOptions"></chart>
</template>

<style>
.echarts {
  height: 300px;
}
</style>

<script>
export default {
  data: function() {
    return {
      pieOptions: {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        color: ['#45AAF3', '#4AC9AD', '#6423F1'],
        legend: {
          left: 'center',
          bottom: 0,
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'debug',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [10, 20],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              //  饼图图形上的文本标签
              normal: {
                show: true,
                formatter: '{b}：{c}  {per|{d}%}  ',
                borderColor: '#aaa',
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },

                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
</script>