import FilterHR from "../fllter/hr/FilterHR";
import { useState } from "react";
import { useSelector } from "react-redux";
import SortIcon from "../fllter/SortIcon";




const HeadHR = () => {
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
        <span>HR</span>

        { (showFilters || filter.some( obj =>('hr' in obj) )) ? (
          <div className="d-flex">
            <SortIcon />
            <FilterHR />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadHR;
