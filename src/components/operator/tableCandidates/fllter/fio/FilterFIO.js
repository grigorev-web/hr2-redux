import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const FilterFIO = () => {
  const filter = useSelector((state) => state.filterTable);
  const dispatch = useDispatch();
  let active = filter.some((obj) => "namephone" in obj);
  const style = {
    color: active ? "green" : "#495057",
    cursor: active ? "pointer" : "default",
  };
  return (
    <div style={style} onClick={active ? ()=>dispatch({type:"CLEAR_NAMEPHONE_FILTER"}) : ()=>false}>
      <FiFilter />
    </div>
  );
};

export default FilterFIO;
