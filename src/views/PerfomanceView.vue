
<template>
  <Navigator />
  <div><h4 class="tihead">Perfomance</h4></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                 
            </div>
        </div>
    </div>

</template>


<script>
import Navigator from '@/components/Navigator.vue'
export default {
    components: {
        Navigator
    },
    
}

 // Chart js here
 const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
</script>