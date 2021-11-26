import { fireEvent } from "@testing-library/dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const InputFIO = () => {
  const [fioSearch, setFioSearch] = useState("");
  const dispatch = useDispatch();

  function changeSearch(e){
    setFioSearch(e.target.value); 
    if(e.target.value.length < 4  ) return // если нет 3 букв
  
    dispatch({type:'ADD_NAMEPHONE_FILTER', value:e.target.value})   
  }

  return (
    <div>
      <input
        title="Введите 4 буквы"
        className="form-control"
        style={{ height: 21, width: 230 }}
        type="text"
        placeholder="Поиск"
        onChange={changeSearch}
        value={fioSearch}
      />
    </div>
  );
};

export default InputFIO;
