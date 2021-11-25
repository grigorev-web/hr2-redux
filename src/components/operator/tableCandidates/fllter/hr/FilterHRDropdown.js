import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../store/API";
import OutsideAlerter from "../../../../basic/OutsideAlerter";

const FilterHRDropdown = ({ setDropdown }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Ищем  обьект фильтра  'hr'
  let filterObj = {}; // если нет , то пустой
  state.filterTable.map( obj => {
      if('hr' in obj) filterObj = obj;
  } );
  const [filterValues, setFilterValues] = useState([]);

  useEffect(() => {

    const API = api(dispatch, state);
    API.get(`filter-values?column=hr`)
      .then(function (response) {
        // Получаем уникальные hr и счет
        setFilterValues(response.data.values);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function selectValue(e){
      
      if(e.target.checked){
          dispatch({type:"ADD_TABLE_FILTER",column:'hr',value:e.target.value})
      } else{
          dispatch({type:"DELETE_TABLE_FILTER",column:'hr',value: e.target.value})
      }
  }

  
  function handleOutsideClick() {
    setDropdown(false);
  }
  return (
    <OutsideAlerter handleClick={handleOutsideClick}>
      <div
        tabIndex="-1"
        role="menu"
        aria-hidden="true"
        className="status-change-dropdown dropdown-menu show shadow-lg rounded"
        style={{ width: "200px", left:"-220px" }}
      >
        <ul className="nav flex-column">
          {Object.entries(filterValues).map(([hr, count], index) => {
              let checked = ('hr' in filterObj) ? filterObj.hr.some( value =>(value === hr)) : false;
            return (
              <li
                key={index}
                className="nav-item d-flex align-items-center "
              >
                <div
                  className="nav-link dropdown-values"
                  style={{ padding: "0.2rem 0.5rem" }}
                >
                  <div className="position-relative form-check">
                    <label className="form-check-label">
                      <input type="checkbox" onChange={selectValue} value={hr} className="form-check-input" checked={checked} />
                      {hr ? <p style={{marginTop:'2px'}}>{hr}</p> : "пусто"}{" "}
                    </label>
                  </div>
                  
                  <p
                    className="badge badge-pill badge-light"
                    style={{ color: "#9ea1a3" }}
                  >
                    ({count})
                  </p>
                </div>
              </li>
            );
          })}

          <li className="nav-item-divider nav-item"></li>
          <li className="nav-item-btn nav-item">
            <button
              onClick={handleOutsideClick}
              className="btn-wide btn-shadow btn btn-secondary btn-sm"
            >
              Закрыть
            </button>
          </li>
        </ul>
      </div>
    </OutsideAlerter>
  );
};

export default FilterHRDropdown;
