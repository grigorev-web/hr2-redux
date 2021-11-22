import SortCity from "../fllter/SortCity";
import FilterCity from "../fllter/FilterCity";
import { useState } from "react";
import { FiTerminal } from "react-icons/fi";
import { useSelector } from "react-redux";

const CityHead = () => {
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
      <div className="d-flex">
        <span>Город</span>

        { (showFilters || filter.some( obj =>('city' in obj) )) ? (
          <div className="d-flex">
            <SortCity />
            <FilterCity />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default CityHead;
