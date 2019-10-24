
<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data: () => ({
      chartdata: {
        labels: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
            {
          label: 'PHP (mostly Laravel)',
          borderColor: '#e8242d',
          backgroundColor: '#e8242d',
          fill: false,
          data: [
            0,1,2.5,3.5,3.5,5,5.5,6,8
          ],
          yAxisID: 'y-axis-1',
        },
            {
          label: 'Javascript (mostly Vue.js)',
          borderColor: '#45b5f4',
          backgroundColor: '#45b5f4',
          fill: false,
          data: [
            0,1.5,2,2,2,3,4.5,5,6
          ],
          yAxisID: 'y-axis-2'
        }
        , {
          label: 'HTML / CSS',
          borderColor: 'rgba(194,193,54,0.43)',
          backgroundColor: 'rgba(194,193,54,0.43)',
          fill: false,
          data: [
            2,4,6,8,8,8,9,9,9
          ],
          yAxisID: 'y-axis-3'
        },
            {
          label: 'Python',
          borderColor: '#f08d00',
          backgroundColor: '#f08d00',
          fill: false,
          data: [
            0,2,4,4,4,4,4,4,4
          ],
          yAxisID: 'y-axis-4'
        },
            {
          label: 'Java',
          borderColor: '#41d67d',
          backgroundColor: '#41d67d',
          fill: false,
          data: [
            1,3,3,4,4,4,3.5,3,3

          ],
          yAxisID: 'y-axis-5'
        },
            {
          label: 'C++',
          borderColor: '#916b14',
          backgroundColor: '#916b14',
          fill: false,
          data: [
            2,2.5,3.5,3,3,3,3,2,2
          ],
          yAxisID: 'y-axis-6'
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: true,
          text: 'Learning Curve (relative to my general experience)'
        },
        scales: {
          yAxes: [{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10
            },
          }
          ,{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'left',
            id: 'y-axis-2',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              },
          },{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'left',
            id: 'y-axis-3',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              },
          },{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'left',
            id: 'y-axis-4',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              },
          },{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'left',
            id: 'y-axis-5',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              },
          },{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'left',
            id: 'y-axis-6',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              },

          }
          ],
        }
      }
    }),

    mounted () {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>
<style>

</style>
