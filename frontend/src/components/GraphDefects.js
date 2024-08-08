// ChartDefects.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDefects = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Values',
        data: chartData.data,
        backgroundColor: chartData.backgroundColors,
        borderColor: chartData.borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.x !== null) {
              label += new Intl.NumberFormat('en-US', { notation: 'compact' }).format(context.parsed.x);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Bar data={data} options={options} />
      <div >
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {chartData.labels.map((label, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: chartData.backgroundColors[index],
                  marginRight: '10px',
                }}
              ></span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChartDefects;
