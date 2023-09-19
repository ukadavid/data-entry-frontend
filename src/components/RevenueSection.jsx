/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { apiGet } from '../Context/Api/Axios';

const RevenueSection = () => {
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiGet('/api/orders'); // Make an API call to fetch orders
        const orders = response.data;

        // Process orders to calculate revenue over time
        const revenueByDate = {};
        orders.forEach(order => {
          const date = new Date(order.orderDate);
          const formattedDate = date.toLocaleString('default', { month: 'long' });
          if (revenueByDate[formattedDate]) {
            revenueByDate[formattedDate] += order.price;
          } else {
            revenueByDate[formattedDate] = order.price;
          }
        });

        // Convert revenueByDate object to arrays for chart data
        const labels = Object.keys(revenueByDate);
        const data = Object.values(revenueByDate);

        setRevenueData({ labels, data });
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (revenueData) {
      // Create a new chart
      const chartElement = document.getElementById('revenueChart');
      const newChart = new Chart(chartElement, {
        type: 'line',
        data: {
          labels: revenueData.labels,
          datasets: [
            {
              data: revenueData.data,
              fill: true,
              borderColor: '#2563EB', // Curve color
              backgroundColor: 'rgba(37, 99, 235, 0.3)', // Fill color
              tension: 0.4 // Make the line a curve
            }
          ]
        },
        options: {
          scales: {
            x: {
              title: {
                display: false, // Remove x-axis title
              },
              ticks: {
                font: {
                  size: 9,
                  family: 'Inter'
                }
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: false, // Remove y-axis title
              },
              ticks: {
                callback: function (value) {
                  return '$' + value.toLocaleString();
                },
                font: {
                  size: 9,
                  family: 'Inter'
                }
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Revenue over time',
              font: {
                size: 11,
                family: 'Inter'
              },
              align: 'start' // Align to the left
            },
            legend: {
              display: false // Remove the legend completely
            }
          }
        }
      });

      return () => {
        newChart.destroy();
      };
    }
  }, [revenueData]);

  return (
    <div className="overlap-2">
      <div className="revenue-sales">
        <canvas id="revenueChart"></canvas>
      </div>
    </div>
  );
}

export default RevenueSection;
