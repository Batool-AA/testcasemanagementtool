// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label) ,
    datasets: [
      {
        label: '',
        data: data.map((item) => item.value),
        backgroundColor: [
          'green',
          'gray',
          'yellow',
          'red', 
          'purple',
          'orange',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const setOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },

      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label;
            const value = context.raw;
            const percentage = `${Math.round((value / context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100)}%`;
            const sum = (context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0));
            return `${label}: ${value} / ${sum} (${percentage})`;
          },
        },
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={setOptions}/>
    </div>
  );
};

export default PieChart;
