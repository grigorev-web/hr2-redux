import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../store/API";
import OutsideAlerter from "../../../../basic/OutsideAlerter";

const FilterProjectDropdown = ({ setDropdown }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const projects = useSelector((state) => state.projects);

  // Ищем  обьект фильтра  'project'
  let filterObj = {}; // если нет , то пустой
  state.filterTable.map((obj) => {
    if ("project" in obj) filterObj = obj;
  });
  const [filterValues, setFilterValues] = useState([]);

  useEffect(() => {
    const API = api(dispatch, state);
    API.get(`filter-values?column=project`)
      .then(function (response) {
        // Получаем уникальные проекты и счет
        setFilterValues(response.data.values);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function selectValue(e) {
    if (e.target.checked) {
      dispatch({
        type: "ADD_TABLE_FILTER",
        column: "project",
        value: e.target.value,
      });
    } else {
      dispatch({
        type: "DELETE_TABLE_FILTER",
        column: "project",
        value: e.target.value,
      });
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
        style={{ width: "200px", left: "-220px" }}
      >
        <ul className="nav flex-column">
          {Object.entries(filterValues).map(([project, count], index) => {
            let checked =
              "project" in filterObj
                ? filterObj.project.some((value) => value === project)
                : false;
            if (!(project in projects)) return '';
            return (
              <li key={index} className="nav-item d-flex align-items-center ">
                <div
                  className="nav-link dropdown-values"
                  style={{ padding: "0.2rem 0.5rem" }}
                >
                  <div className="position-relative form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        onChange={selectValue}
                        value={project}
                        className="form-check-input"
                        checked={checked}
                      />
                      {project ? (
                        <p style={{ marginTop: "2px" }}>{projects[project]}</p>
                      ) : (
                        "пусто"
                      )}{" "}
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

export default FilterProjectDropdown;
