import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FilterProjectDropdown from "./FilterProjectDropdown";

const FilterProject = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterTable);
  
  return (
    <div
      className="pl-1 dropdown d-inline-block"   
      style={{ color: filter.some( obj => 'project' in obj) ? "green" : "#495057", cursor:'pointer' }}
    >
      <FiFilter onClick={() => {
        setDropdown(!dropdown);
      }}/>

      {dropdown ? <FilterProjectDropdown setDropdown={setDropdown} /> : ''}


    </div>
  );
};

export default FilterProject;
