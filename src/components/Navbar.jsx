import chevronDown from "../assets/chevron-down-1.svg"
import line from "../assets/line-2.svg"

const Navbar = () => {
  return (
    <>
      <div className="overlap-group">
          <div className="header">
            <div className="icon">
              <div className="ellipse-wrapper">
                <div className="ellipse" />
              </div>
            </div>
            <div className="avatar">
              <div className="avatar-2" />
              <img className="img" src={chevronDown} />
            </div>
          </div>
          <img className="line" src={line} />
        </div>
    </>
  );
};

export default Navbar;
