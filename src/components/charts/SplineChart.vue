<template>
  <apexchart type="area" height="230" :options="chartData.chartOptions" :series="chartData.series"></apexchart>
</template>

<script>

export default {
  data() {
    return {
      chartData: {
        series: [
          {
            name: 'series1',
            data: []
          }, 
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ],
        chartOptions: {
          colors: ['#8b5cf6','#f02fc2'],
          chart: {
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        }
      },
    }
  },
  computed: {
    randomArray() {
      let arr = []

      while (arr.length < 7) {
        let number = Math.floor(Math.random() * 50)
        if (!arr.includes(number)) arr.push(number)
      }
      return arr
    }
  },
  created() {
    this.chartData.series[0].data = this.randomArray    
  }
}
</script>

<style lang="scss" scoped>

</style>