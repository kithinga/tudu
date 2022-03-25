<template>
  <div class="bar-box">
        <h6>Perfomance per task completion</h6>
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
       /* border: 1px solid rgb(230, 238, 236); */
       padding:1.7rem;
       border-radius:10px;
     }
     </style>