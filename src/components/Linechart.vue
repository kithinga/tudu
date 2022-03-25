<template>
  <div class="line-box">
    <h6>Perfomance per task completion</h6>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import lineChartData from '/Perchart-data.js'

export default {
  name: 'Linechart',
  data() {
    return {
      lineChartData: lineChartData
    }
  },
  mounted() {
    const linectx = document.getElementById('line-chart');
    new Chart(linectx, this.lineChartData);
  }
}
</script>


<style scoped>
     .line-box{
       /* border: 1px solid rgb(230, 238, 236); */
       padding:1.7rem;
       border-radius:10px;
 
     }

    
</style>