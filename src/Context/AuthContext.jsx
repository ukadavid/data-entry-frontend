import React, { createContext } from "react";

import { toast } from "react-toastify";
import { apiPost } from "./Api/Axios";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  /**=================Order Submit =================================== */

  const submitOrder = async (formData) => {
    try {
      const orderData = {
        customerName: formData.customerName,
        productName: formData.productName,
        productCategory: formData.productCategory,
        price: formData.price,
        phoneNumber: formData.phoneNumber,
        orderDate: formData.orderDate,
      };

      
      console.log(orderData)
      const response = await apiPost("/api/orders", orderData);
      const data = await response.data;
      console.log(data);
      toast.success(data.displayMessage);

      setTimeout(() => {
         window.location.reload = '/';

      }, 2000);
    } catch (error) {
      toast.error(error.response.data.errorMessages[0]);
    }
  };


  return (
    <dataContext.Provider
      value={{
        submitOrder,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = React.useContext(dataContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;