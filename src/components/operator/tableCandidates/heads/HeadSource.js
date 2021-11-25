import { useState } from "react";
import { useSelector } from "react-redux";
import SortIcon from "../fllter/SortIcon";
import FilterSource from "../fllter/source/FilterSource";




const HeadSource = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filter = useSelector((state) => state.filterTable);

  return (
    <th
      style={{width:'9%'}}
      className="text-center"
      onMouseEnter={() => {
        setShowFilters(true);
      }}
      onMouseLeave={()=>{setShowFilters(false)}}
    >
      <div className="d-flex justify-content-between">
        <span>Источник</span>

        { (showFilters || filter.some( obj =>('source' in obj) )) ? (
          <div className="d-flex">
            <SortIcon />
            <FilterSource />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadSource;
