<template>
  <div class="pie-box">
    <canvas id="pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import pieChartData from '/Piechart-data.js'

export default {
  name: 'Piechart',
  data() {
    return {
      pieChartData: pieChartData
    }
  },
  mounted() {
    const piectx = document.getElementById('pie-chart');
    new Chart(piectx, this.pieChartData);
  }
}
</script>


<style scoped>
     .pie-box{
       border: 1px solid rgb(230, 238, 236);
       padding:2rem;
       border-radius:9px;
     }
     .pers h6{
       font-size: 13px;
       font-weight: 600;
     }
</style>