import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../store/API";
import OutsideAlerter from "../../../../basic/OutsideAlerter";

const FilterCityDropdown = ({ setDropdown }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Ищем  обьект фильтра  'city'
  let filterObj = {}; // если нет , то пустой
  state.filterTable.map( obj => {
      if('city' in obj) filterObj = obj;
  } );
  const [filterValues, setFilterValues] = useState([]);

  useEffect(() => {
    console.log("dropdown city useEffect");
    const API = api(dispatch, state);
    API.get(`filter-values?column=city`)
      .then(function (response) {
        console.log(response.data.values);
        // Получаем уникальные город и счет
        setFilterValues(response.data.values);
        // dispatch({
        //   type: "FETCH_MORE_CANDIDATES",
        //   candidates: response.data.candidates,
        // });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function selectValue(e){
      
      console.log("SELECT VALUE",e.target.checked,e.target.value)
      if(e.target.checked){
          dispatch({type:"ADD_TABLE_FILTER",column:'city',value:e.target.value})
      } else{
          dispatch({type:"DELETE_TABLE_FILTER",column:'city',value: e.target.value})
      }
  }

  function changeStatus(num) {
    console.log(num);
    dispatch({ type: "ADD_TABLE_FILTER" });
  }

  function handleOutsideClick() {
    console.log("handleoutside click");
    setDropdown(false);
  }
  return (
    <OutsideAlerter handleClick={handleOutsideClick}>
      <div
        tabIndex="-1"
        role="menu"
        aria-hidden="true"
        className="status-change-dropdown dropdown-menu show shadow-lg rounded"
        style={{ width: "300px" }}
      >
        <ul className="nav flex-column">
          {Object.entries(filterValues).map(([city, count], index) => {
              let checked = ('city' in filterObj) ? filterObj.city.some( value =>(value === city)) : false;
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
                      <input type="checkbox" onChange={selectValue} value={city} className="form-check-input" checked={checked} />
                      {city ? <p style={{marginTop:'2px'}}>{city}</p> : "пусто"}{" "}
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

export default FilterCityDropdown;
