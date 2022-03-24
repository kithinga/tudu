<template>
  <div class="chart-box">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '/Perchart-data.js'

export default {
  name: 'Perchart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>


<style scoped>
     .chart-box{
       border: 1px solid rgb(253, 250, 250);
       padding:2rem;
       border-radius:9px;
     }
</style>