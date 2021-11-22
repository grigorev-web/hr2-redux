import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const FilterCity = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector( state => state.filterTable)
  console.log("DROPDOWN", dropdown)
  //onClick={()=>dispatch({type:"ADD_TABLE_FILTER"})}
  return (
    <div
      className="pl-1"
      onClick={() => setDropdown(!dropdown)}
      style={{ color: filter.length ? "green":"#495057" }}
    >
      <FiFilter />
    </div>
  );
};

export default FilterCity;
