import Dashboard from "./pages/Dashboard";
import "./App.css";
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <DataProvider>
        <ToastContainer />
        <Dashboard />
      </DataProvider>
    </>
  );
}

export default App;
