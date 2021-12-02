
import { useState } from "react";
import { useSelector } from "react-redux";
import SortIcon from "../fllter/SortIcon";
import FilterProject from "../fllter/project/FilterProject";




const HeadProject = () => {
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
        <span>Проект</span>

        { (showFilters || filter.some( obj =>('project' in obj) )) ? (
          <div className="d-flex">
            <SortIcon />
            <FilterProject />
          </div>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadProject;
