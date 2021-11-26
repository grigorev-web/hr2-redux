import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FilterSourceDropdown from "./FilterSourceDropdown";

const FilterSource = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterTable);
  //console.log("DROPDOWN", dropdown)
  //onClick={()=>dispatch({type:"ADD_TABLE_FILTER"})}

  return (
    <div
      className="pl-1 dropdown d-inline-block"
      style={{
        color: filter.some((obj) => "source" in obj) ? "green" : "#495057",
        cursor:'pointer',
      }}
    >
      <FiFilter
        onClick={() => {
          setDropdown(!dropdown);
        }}
      />

      {dropdown ? <FilterSourceDropdown setDropdown={setDropdown} /> : ""}
    </div>
  );
};

export default FilterSource;
