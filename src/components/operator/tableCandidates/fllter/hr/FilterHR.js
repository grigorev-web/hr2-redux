import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FilterHRDropdown from "./FilterHRDropdown";

const FilterHR = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterTable);
  
  return (
    <div
      className="pl-1 dropdown d-inline-block"   
      style={{ color: filter.some( obj => 'hr' in obj) ? "green" : "#495057", cursor:'pointer' }}
    >
      <FiFilter onClick={() => {
        setDropdown(!dropdown);
      }}/>

      {dropdown ? <FilterHRDropdown setDropdown={setDropdown} /> : ''}


    </div>
  );
};

export default FilterHR;
