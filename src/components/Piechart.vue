<template>
  <div class="pie-box">
     <h6>Perfomance per task completion</h6>
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
       /* border: 1px solid rgb(230, 238, 236); */
       padding:1.7rem;
       border-radius:10px;
      
     }

  
</style>