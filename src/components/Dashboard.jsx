import Header from "./Header"
import Navbar from "./Navbar"
import OrderByCategory from "./OrderByCategory"
import OrderList from "./OrderList"
import RevenueSection from "./RevenueSection"
import Sidebar from "./Sidebar"

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
      <img className="line-12" src="img/line-13.svg" />
    </div>
    <Sidebar />
  </div>
</div>

    </>
  )
}

export default Dashboard
