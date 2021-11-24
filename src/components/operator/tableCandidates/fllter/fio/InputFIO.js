import { useState } from "react";
import { useDispatch } from "react-redux";

const InputFIO = () => {
  const [fioSearch, setFioSearch] = useState("");
  const dispatch = useDispatch();

  function changeSearch(e){
      if(e.target.value.length < 4) return;
      console.log("SEARCH CHANGE")
      dispatch({type:'ADD_TABLE_FILTER',column:'namephone', value:e.target.value})
  }
     // dispatch({type:'DELETE_TABLE_FILTER',column:'namephone',value:e.target.value})

  return (
    <div>
      <input
        className="form-control"
        style={{ height: 21, width: 200 }}
        type="text"
        placeholder="Поиск"
        onChange={changeSearch}
      />
    </div>
  );
};

export default InputFIO;
