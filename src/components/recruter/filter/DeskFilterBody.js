import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetDeskCandidates } from "../../../store/asyncActions";
import DateRange from "../../basic/DateRange";
import DeskFilterHR from "./DeskFilterHR";

const DeskFilterBody = ({ setApply }) => {
  const [fromTo, setFromTo] = useState(["", ""]);
  const [selectedHR, setSelectedHR] = useState("all");
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role);

  function applyFilter() {
    let [from, to] = fromTo;

    let myFrom = from
      ? from.getFullYear() +
        "-" +
        ("0" + (from.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + from.getDate()).slice(-2) +
        " 00:00:00"
      : ""; // MySQL format
    let myTo = to
      ? to.getFullYear() +
        "-" +
        ("0" + (to.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + to.getDate()).slice(-2) +
        " 23:59:59"
      : ""; // MySQL format

    let filter = {
      from: myFrom,
      to: myTo,
      hr: selectedHR,
    };
    setApply(true);
    dispatch(asyncGetDeskCandidates(filter));
  }

  function resetFilter() {
    setApply(false);
    dispatch(asyncGetDeskCandidates());
  }

  
  return (
    <div className="main-card mb-3 card">
      <div className="card-header">Фильтр</div>
      <div className="card-body">
        <div className="mb-5">
          <div>
            <h5>По дате</h5>
            <div
              role="group"
              className="mb-2 btn-group-sm btn-group btn-group-toggle"
              data-toggle="buttons"
            >
              <label className="btn btn-pill btn-outline-primary active">
                <input type="radio" />
                Добавления
              </label>

              <label className="btn btn-pill btn-outline-primary" >
                <input type="radio" />
                Собеседования
              </label>
            </div>
          </div>

          <div>
            <DateRange setFromTo={setFromTo} />
          </div>
        </div>
        {role === "admin" ? (
          <DeskFilterHR selectedHR={selectedHR} setSelectedHR={setSelectedHR} />
        ) : (
          ""
        )}
      </div>

      <div className="d-block text-right card-footer">
        <button className="mr-2 btn btn-danger btn-sm" onClick={resetFilter}>
          Сбросить
        </button>
        <button className="btn btn-success btn-sm" onClick={applyFilter}>
          Применить
        </button>
      </div>
    </div>
  );
};

export default DeskFilterBody;
