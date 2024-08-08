// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChartProgress = ({ data = {} }) => {
  const defaultData = {
    labels: [],
    remaining_tests: [],
    remaining_efforts: [],
    ideal_progress: [],
  };

  const actualData = { ...defaultData, ...data };

  const total_data = actualData.remaining_tests.reduce((acc, val) => acc + val, 0);
  const remaining_percent =  Math.round((actualData.remaining_tests / total_data) * 100);

  const chartData = {
    labels: actualData.labels,
    datasets: [
      {
        label: `Remaining Tests`,
        data: actualData.remaining_tests,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        fill: false,
      },
      // {
      //   label: `Remaining Efforts (Forecast not available)`,
      //   data: actualData.remaining_efforts,
      //   borderColor: 'red',
      //   backgroundColor: 'rgba(128, 128, 128, 0.2)',
      //   fill: false,
      // },
      // {
      //   label: `Ideal Progress (Forecast not available)`,
      //   data: actualData.retest,
      //   borderColor: 'gray',
      //   backgroundColor: 'rgba(255, 255, 0, 0.2)',
      //   fill: false,
      // },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Since ${actualData.labels[0]}`,
      },
    },
  };

  return <Line data={chartData} options={options}/>;
};

export default LineChartProgress;
