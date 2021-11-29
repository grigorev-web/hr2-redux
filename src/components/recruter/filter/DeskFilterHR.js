import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../store/API";

const DeskFilterHR = ({selectedHR, setSelectedHR}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [HRs, setHRs] = useState({});

  useEffect(() => {
    const API = api(dispatch, state);
    API.get(`filter-values?column=hr`)
      .then(function (response) {
        // Получаем уникальные hr и счет
        setHRs(response.data.values);
        console.log("VALUES", response.data.values);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function selectHR(e){
      console.log("selectedHR",e.target.value)
      setSelectedHR(e.target.value);
  }
  return (
    <div>
      <div className="position-relative form-group">
        <label htmlFor="exampleSelect" className="">
          Выберите HR
        </label>
        <select value={selectedHR} name="select" id="exampleSelect" className="form-control" onChange={selectHR}>
            <option value="all">Выбрать всех</option>
          {Object.keys.length
            ? Object.entries(HRs).map(([hr, count],index) => <option key={index} value={hr} >{hr}</option>)
            : ""}
        </select>
      </div>
    </div>
  );
};

export default DeskFilterHR;
