import upArrow from "../assets/arrow-narrow-up-4.svg";
import downArrow from "../assets/arrow-narrow-down-1.svg";
import downArrowBig from "../assets/arrow-narrow-down-2.svg";
import chevronDown from "../assets/chevron-down-2.svg";
import line from "../assets/line-5.svg";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <div className="title">
          <div className="text-wrapper">Welcome, Mattew</div>
          <div className="text-wrapper-2">Monday, 05 Agust 2022</div>
        </div>
        <div className="div-2">
          <div className="card-summary-job">
            <div className="group" />
            <div className="tittle">
              <div className="body">Total&nbsp;&nbsp;Revenue</div>
            </div>
            <div className="frame">
              <div className="amount">
                <div className="body-2">$40,000</div>
                <div className="frame-2">
                  <img className="img" src={upArrow} />
                  <div className="body-3">59%</div>
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" src="img/line-3.svg" />
          <div className="card-summary-job">
            <div className="tittle">
              <div className="body">Orders</div>
            </div>
            <div className="frame">
              <div className="amount">
                <div className="body-2">40,000</div>
                <div className="frame-3">
                  <img className="img" src={downArrow} />
                  <div className="body-4">9%</div>
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" src={line} />
          <div className="card-summary-job">
            <div className="tittle">
              <div className="body">Customers</div>
            </div>
            <div className="frame">
              <div className="amount">
                <div className="body-2">40</div>
                <div className="frame-3">
                  <img className="img" src={downArrowBig} />
                  <div className="body-4">59%</div>
                </div>
              </div>
            </div>
          </div>
          <img className="line-3" src={line} />
        </div>
        <div className="dropdown">
          <div className="body-5" onClick={toggleDropdown} >This Year</div>
          <img className="img" src={chevronDown} onClick={toggleDropdown} />
          
        </div>
        {isOpen && (
        <div className="dropdown-content">
            <a href="#">This Month</a>
            <a href="#">Last Month</a>
            <a href="#">This Year</a>
            <a href="#">Last Year</a>
        </div>
      )}
       
</>

  )
}

export default Header
