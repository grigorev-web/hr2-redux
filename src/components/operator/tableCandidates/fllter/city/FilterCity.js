import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FilterCityDropdown from "./FilterCityDropdown";

const FilterCity = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterTable);
  //console.log("DROPDOWN", dropdown)
  //onClick={()=>dispatch({type:"ADD_TABLE_FILTER"})}

  
  return (
    <div
      className="pl-1 dropdown d-inline-block"   
      style={{ color: filter.length ? "green" : "#495057" }}
    >
      <FiFilter onClick={() => {
        setDropdown(!dropdown);
        //dispatch({ type: "ADD_TABLE_FILTER" });
      }}/>

      {dropdown ? <FilterCityDropdown setDropdown={setDropdown} /> : ''}


    </div>
  );
};

export default FilterCity;
