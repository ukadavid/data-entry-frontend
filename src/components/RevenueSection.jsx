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
          const formattedDate = `${date.getMonth() + 1}-${date.getFullYear()}`;
          if (revenueByDate[formattedDate]) {
            revenueByDate[formattedDate] += order.price;
          } else {
            revenueByDate[formattedDate] = order.price;
          }
        });

        // Convert revenueByDate object to arrays for chart data
        const labels = Object.keys(revenueByDate).sort();
        const data = Object.values(revenueByDate).sort();

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
              label: 'Revenue',
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
