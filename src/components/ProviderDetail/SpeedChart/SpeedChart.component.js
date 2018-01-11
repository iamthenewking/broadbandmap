import { Bar } from 'vue-chartjs'

export default {
  name: 'SpeedChart',
  components: { },
  props: ['data'],
  extends: Bar,
  mounted () {
    let chartData = {
      labels: ['any', '10', '25', '50', '100', '250', '500', '1000'],
      datasets: []
    }

    let backgroundColors = [process.env.CHART_COLOR_01, process.env.CHART_COLOR_02, process.env.CHART_COLOR_03]

    // merge the prop data array with chartData.datasets
    for (let i = 0; i < this.data.length; i++) {
      chartData.datasets[i] = {}
      chartData.datasets[i]['backgroundColor'] = backgroundColors[i]
      chartData.datasets[i] = Object.assign(chartData.datasets[i], this.data[i])
    }

    this.renderChart(chartData, this.options)
  },
  data () {
    return {
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 20
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            stacked: false,
            scaleLabel: {
              display: true,
              labelString: 'Speed'
            }
          }],
          yAxes: [{
            stacked: false,
            scaleLabel: {
              display: true,
              labelString: 'Percentage'
            },
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              let decimal2 = (tooltipItems.yLabel).toFixed(2)
              let decimal4 = (tooltipItems.yLabel).toFixed(4)
              let percentage = (parseFloat(decimal2) <= 0.00) ? decimal4 : decimal2

              return data.datasets[tooltipItems.datasetIndex].label.slice(0, 15) + ': ' + percentage + '%'
            }
          }
        }
      }
    }
  }
}
