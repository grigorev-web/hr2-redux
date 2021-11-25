import SortCity from "../fllter/SortIcon";
import FilterCity from "../fllter/city/FilterCity";
import { useState } from "react";
import { FiTerminal } from "react-icons/fi";
import { useSelector } from "react-redux";
import SortIcon from "../fllter/SortIcon";

const HeadCity = () => {
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
        <span>Город</span>

        { (showFilters || filter.some( obj =>('city' in obj) )) ? (
          <div className="d-flex">
            <SortIcon />
            <FilterCity />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadCity;
