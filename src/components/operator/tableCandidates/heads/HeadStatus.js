
import { useState } from "react";
import { useSelector } from "react-redux";
import SortIcon from "../fllter/SortIcon";
import FilterStatus from "../fllter/status/FiterStatus";




const HeadStatus = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filter = useSelector( state => state.filterTable);
  
  return (
    <th
      className="text-center"
      onMouseEnter={() => {
        setShowFilters(true);
      }}
      onMouseLeave={()=>{setShowFilters(false)}}
    >
      <div className="d-flex justify-content-between">
        <span>Статус</span>

        { (showFilters || filter.some( obj =>('status' in obj) )) ? (
          <div className="d-flex">
            <SortIcon />
            <FilterStatus />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadStatus;
