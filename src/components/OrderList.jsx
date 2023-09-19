import { useState, useEffect } from "react";
import dot from "../assets/dots-1.svg";
import { apiGet } from "../Context/Api/Axios";
import { formatDate } from "../Utils/formData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    apiGet("/api/orders") // Use Axios to fetch data
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex-order-table">
      <div>
        <h3 className="order-h3">Order</h3>
      </div>
      <div className="table__row table__row--header">
        <div className="empty">
          <input type="checkbox" name="my_checkbox" value="true" />
        </div>
        <div className="column propertyId">Customer Name</div>
        <div className="column streetAddress">Product Name</div>
        <div className="column city">Category</div>
        <div className="column state">Date</div>
        <div className="column zip">Price</div>
        <div className="dot-order">
          <img src={dot} alt="line image" />
        </div>
      </div>

      {currentItems.map((order) => (
        <div className="table__row" key={order._id}>
          <div className="empty">
            <input type="checkbox" name="my_checkbox" value="true" />
          </div>
          <div className="column propertyId">{order.customerName}</div>
          <div className="column streetAddress">{order.productName}</div>
          <div className="column city">{order.productCategory}</div>
          <div className="column state">{formatDate(order.orderDate, "M/D/YYYY")}</div>
          <div className="column zip">${order.price.toFixed(2)}</div>
          <div className="dot-order">
            <img src={dot} alt="line image" />
          </div>
        </div>
      ))}

      <div className="pagination">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentItems.length < itemsPerPage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default OrderList;
