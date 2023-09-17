import { useState }  from 'react'
import logo from "../assets/exclude-4.svg";
import line from "../assets/line-1.svg"
import settings from "../assets/settings-1.svg"
import logout from "../assets/logout-3.svg";
import menu from "../assets/menu-2-1.svg"
import overview from "../assets/layout-grid-3.svg"
import sales from "../assets/briefcase-3.svg"
import customers from "../assets/calendar-3.svg"
import inventory from "../assets/history-3.svg"
import profitLoss from "../assets/star-3.svg"
import "../App.css"


const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
   <>
    <div className={`sidebar-job-search ${sidebarOpen ? '' : 'sidebar-closed'}`}>
  <div className="logo">
    <img className="exclude" src={logo} />
    <div className="hiphonic">XYZ shop</div>
  </div>
  <img className="line-13" src={line} />
  <div className="goals">
    <img className="img-2" src={settings}/>
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
        <div className="name-5">
          <img className="img-2" src={sales} />
          <div className="text-wrapper-26">Sales</div>
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

   </>
  )
}

export default Sidebar
