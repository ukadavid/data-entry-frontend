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
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      
      console.log(registerData)
      const response = await apiPost("/user/auth/register", registerData);
      const data = await response.data;
      console.log(data);
      toast.success(data.displayMessage);

      setTimeout(() => {
        const userEmail = registerData.email;
         window.location.href = `/verify?userId=${userEmail}`;
  
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