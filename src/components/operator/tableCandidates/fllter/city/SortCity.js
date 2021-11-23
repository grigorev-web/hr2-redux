import { useState } from "react";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

const SortCity = () => {
  const [hover, setHover] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  
  return (
    <div
      className="pl-1"
      style={{opacity: hover ? '1' : '0.6', cursor:'pointer'}}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={()=>{setSortAsc(!sortAsc)}}
    >
      { sortAsc ? <FaSortAmountDown />: <FaSortAmountUp/>}
    </div>
  );
};

export default SortCity;
