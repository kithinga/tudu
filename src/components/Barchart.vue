<template>
  <div class="bar-box">
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import barChartData from '/Barchart-data.js'

export default {
  name: 'Barchart',
  data() {
    return {
      barChartData: barChartData
    }
  },
  mounted() {
    const barctx = document.getElementById('bar-chart');
    new Chart(barctx, this.barChartData);
  }
}
</script>


<style scoped>
     .bar-box{
       border: 1px solid rgb(230, 238, 236);
       padding:2rem;
       border-radius:9px;
     }
     .pers h6{
       font-size: 13px;
       font-weight: 600;
     }
     </style>