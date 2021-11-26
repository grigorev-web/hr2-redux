import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import DeskFilterBody from "./DeskFilterBody";
import OutsideAlerter from "../../basic/OutsideAlerter";

const DeskFilter = () => {
  const [active, setActive] = useState(false);
  return (
    <OutsideAlerter handleClick={() => setActive(false)}>
      <div style={{ ...deskFilterStyle, right: active ? 0 : "-300px" }}>
        <div style={filterButtonStyle} onClick={() => setActive(!active)}>
          <button className="btn btn-light">
            <FiFilter />
          </button>
        </div>
        <DeskFilterBody />
      </div>
    </OutsideAlerter>
  );
};

export default DeskFilter;

// STYLES

const deskFilterStyle = {
  position: "fixed",
  //right:"40px",
  top: 0,
  width: 300,
  zIndex: 999,
  //height: "100vh",
  //background:'white',
  transition: "all .2s",
};

const filterButtonStyle = {
  position: "absolute",
  right: 330,
  top: 30,
  opacity: 0.8,
};
