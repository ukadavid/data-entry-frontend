/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const RevenueSection = () => {
  const data = {
    labels: ['2023-09-01', '2023-09-02', '2023-09-03', '2023-09-04', '2023-09-05'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 20000, 30000, 40000, 50000],
        fill: true, // Fill area under the line
        borderColor: '#000000', // Line color
        backgroundColor: 'rgba(255, 0, 0, 0.3)', // Fill color
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 12,
            family: 'Arial'
          }
        },
        ticks: {
          font: {
            size: 10,
            family: 'Arial'
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue',
          font: {
            size: 12,
            family: 'Arial'
          }
        },
        ticks: {
          callback: function (value) {
            return '$' + value.toLocaleString();
          },
          font: {
            size: 10,
            family: 'Arial'
          }
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Revenue over time',
        font: {
          size: 12,
          family: 'Arial'
        }
      }
    }
  };

  useEffect(() => {
    // Create a new chart
    const chartElement = document.getElementById('revenueChart');
    const newChart = new Chart(chartElement, {
      type: 'line',
      data: data,
      options: options
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      newChart.destroy();
    };
  }, [data, options]);

  return (
    <div className="overlap-2">
      <div className="revenue-sales">
        <canvas id="revenueChart"></canvas>
      </div>
    </div>
  );
}

export default RevenueSection;
