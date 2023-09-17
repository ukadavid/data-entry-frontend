import Header from "../components/Header";
import Navbar from "../components/Navbar";
import OrderByCategory from "../components/OrderByCategory";
import OrderList from "../components/OrderList";
import RevenueSection from "../components/RevenueSection";
import Sidebar from "../components/Sidebar";
import line from "../assets/line-13.svg"

const Dashboard = () => {
  return (
    <>
      <div className="overview">
        <div className="div">
          <div className="overlap">
            <div className="content">
              <Navbar />
              <Header />
              <RevenueSection />
              <OrderList />
              <OrderByCategory />
            </div>
            <img className="line-12" src={line} />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
