export const lineChartData = {
    type: "line",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday"],
      datasets: [
        {
          label: "Number of Days",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36695d",
          borderRadius:7,
          borderWidth: 2
        },
        {
          label: "Perfomance per task completion",
          data: [0.166,2.081, 3.003, 0.323, 954.792, 285.886, 51.514],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };



  // bargraph
  export const barChartData = {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday"],
      datasets: [
        {
          label: "Number of Days",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36695d",
          borderRadius:7,
          borderWidth: 2
        },

        {
          label: "Just a bar graph as we figure out",
          data: [0.166,2.081, 3.003, 0.323, 954.792, 285.886, 51.514],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default lineChartData;
  // export default  barChartData;
  