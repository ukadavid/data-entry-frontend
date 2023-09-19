import { useState, useEffect } from "react";
import logo from "../assets/exclude-4.svg";
import line from "../assets/line-1.svg";
import settings from "../assets/settings-1.svg";
import logout from "../assets/logout-3.svg";
import menu from "../assets/menu-2-1.svg";
import overview from "../assets/layout-grid-3.svg";
import sales from "../assets/briefcase-3.svg";
import customers from "../assets/calendar-3.svg";
import inventory from "../assets/history-3.svg";
import profitLoss from "../assets/star-3.svg";
import "../App.css";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
import { apiGet } from "../Context/Api/Axios";

const Sidebar = () => {
  const { submitOrder } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [invoicebarOpen, setInvoicebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openInvoicebar = () => {
    setInvoicebarOpen(true);
  };

  const closeInvoicebar = () => {
    console.log("Close button clicked", invoicebarOpen);
    setInvoicebarOpen(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiGet("/api/orders");
        setCategories(response.data); // Assuming the categories are returned as an array in response.data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const uniqueCategories = [
    ...new Set(categories.map((category) => category.productCategory)),
  ];

  const [formData, setFormData] = useState({
    customerName: "",
    productName: "",
    productCategory: "",
    price: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const textRegex = /^[A-Za-z\s]+$/;

    if (
      !formData.customerName.match(textRegex) ||
      !formData.productName.match(textRegex) ||
      !formData.productCategory ||
      isNaN(formData.price) ||
      !formData.orderDate
    ) {
      toast.error("Please enter valid information in all fields");
      return;
    }

    submitOrder(formData);

    setFormData({
      customerName: "",
      productName: "",
      productCategory: "",
      price: "",
      orderDate: "",
    });
  };

  return (
    <>
      <div
        className={`sidebar-job-search ${sidebarOpen ? "" : "sidebar-closed"}`}
      >
        <div className="logo">
          <img className="exclude" src={logo} />
          <div className="hiphonic">XYZ shop</div>
        </div>
        <img className="line-13" src={line} />
        <div className="goals">
          <img className="img-2" src={settings} />
          <div className="text-wrapper-24">Settings</div>
        </div>
        <div className="goals-2">
          <img className="img-2" src={logout} />
          <div className="text-wrapper-24">Log Out</div>
        </div>
        <img className="menu" src={menu} onClick={toggleSidebar} />
        <div className="menu-2">
          <div className="list-menu">
            <div className="rectangle-6" />
            <div className="name-wrapper">
              <div className="name-4">
                <img className="img-2" src={overview} />
                <div className="text-wrapper-25">Overview</div>
              </div>
            </div>
          </div>
          <div className="list-menu-2">
            <div className="frame-6">
              <div className="name-5" onClick={openInvoicebar}>
                <img className="img-2" src={sales} />
                <div className="text-wrapper-26 ">Create Order</div>
              </div>
            </div>
          </div>
          <div className="list-menu-2">
            <div className="frame-6">
              <div className="name-5">
                <img className="img-2" src={customers} />
                <div className="text-wrapper-26">Customers</div>
              </div>
            </div>
          </div>
          <div className="list-menu-2">
            <div className="frame-6">
              <div className="name-5">
                <img className="img-2" src={inventory} />
                <div className="text-wrapper-26">Inventory</div>
              </div>
            </div>
          </div>
          <div className="list-menu-2">
            <div className="frame-6">
              <div className="name-5">
                <img className="img-2" src={profitLoss} />
                <div className="text-wrapper-26">Profit/Loss</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {invoicebarOpen && (
        <div className={`invoiceModal ${invoicebarOpen ? "open" : ""}`}>
          <FaTimes
            onClick={closeInvoicebar}
            size={32}
            color="blue"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <form onSubmit={handleSubmit}>
            <div>
              <label>Customer Name:</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Product Name:</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Product Category:</label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Order Date:</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Sidebar;
