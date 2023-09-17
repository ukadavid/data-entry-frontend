import { Pie } from 'react-chartjs-2';


const OrderByCategory = () => {
    const data = {
        labels: ['Electronics', 'Clothing', 'Food', 'Home and garden', 'Other'],
        datasets: [
          {
            label: 'Orders',
            data: [40, 30, 15, 10, 5],
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
