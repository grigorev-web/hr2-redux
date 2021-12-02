import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const EditableCell = ({ value, callback }) => {
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const [hover, setHover] = useState(false);
  const [changed, setChanged] = useState(false);

  function saveValue(val) {
    console.log("val",val)
    callback(val);
    setEdit(false);
    setChanged(true);
  }
  function onEnterKey(event) {
    if (event.code === "Enter") {
      saveValue(event.target.value);
    } else if(event.code === "Escape"){
        setEdit(false);
    }
  }

  function cancelValue(){
      setChanged(false);
      setEdit(false);
  }

  if (!edit)
    return (
      <div
        style={{ minWidth: 100, height:31, position: "relative",padding:5 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setEdit(true)}
      >
        {changed ? editedValue : value}{" "}
        {hover ? (
          <div style={{ position: "absolute", top: 3, right: 5 }}>
            <FiEdit3 />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  else
    return (
      <div className="input-group" >
        <input
          placeholder={editedValue? '':'Enter сохранить, Esc отмена'}
          className="form-control form-control-sm"
          onChange={(e) => setEditedValue(e.target.value)}
          //onBlur={() => setEdit(false)}
          onKeyUp={(e) => onEnterKey(e)}
          type="text"
          value={editedValue}
        />
        <div className="input-group-append">
          <button
            title="Сохранить"
            onClick={(e) =>saveValue(editedValue)}
            className="btn btn-outline-success btn-sm"
          >
            <FaCheck />
          </button>
        </div>
        <div className="input-group-append">
          <button
            title="Отменить"
            onClick={cancelValue}
            className="btn btn-outline-danger btn-sm"
          >
            <div style={{ padding: "0 3px" }}>X</div>
          </button>
        </div>
      </div>
    );
};

export default EditableCell;
