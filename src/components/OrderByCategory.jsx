import { Pie } from 'react-chartjs-2';
import { apiGet } from '../Context/Api/Axios';
import { useEffect, useState } from 'react';


const OrderByCategory = () => {

  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await apiGet('/api/orders'); // Replace with your actual API endpoint
        const data = response.data;
        setOrderData(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrder();
  }, []);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  // Assuming orderData is an array of orders

  // Convert orderData to a format suitable for the chart
  const categories = {};
  orderData.forEach(order => {
    if (categories[order.productCategory]) {
      categories[order.productCategory] += 1;
    } else {
      categories[order.productCategory] = 1;
    }
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: 'Orders',
        data: Object.values(categories),
        backgroundColor: [
          '#FF0000', // Electronics
          '#00FF00', // Clothing
          '#0000FF', // Food
          '#FFFF00', // Home and garden
          '#00FFFF'  // Other
        ],
        borderWidth: 0
      }
    ]
  };
    
      const options = {
        plugins: {
          title: {
            display: true,
            text: 'Orders by categories',
            font: {
              size: 12,
              family: 'Arial'
            }
          },
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}%`;
              }
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      };
    
  return (
    <>
    <div className="pie">
          <div className="piechart">
          <Pie data={data} options={options} />
          </div>
        </div>
    </>
  )
}

export default OrderByCategory
