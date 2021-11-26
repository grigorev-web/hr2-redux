import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRange from "../../basic/DateRange";

const DeskFilterDate = () => {
  const [type, setType] = useState('interview');
  const [range, setRange] = useState([new Date(), new Date()]);
  const dispatch = useDispatch();



  return (
    <div className="mb-5">
      <div >
        <p>По дате</p>

      
      </div>

      <div>
        <DateRange onChange={(dateArray) => setRange(dateArray)} />
      </div>


      <div
          role="group"
          className="mb-2 btn-group-sm btn-group btn-group-toggle"
          data-toggle="buttons"
        >
          <label className="btn btn-pill btn-outline-primary active">
            <input type="radio" />
            Собеседования
          </label>

          <label className="btn btn-pill btn-outline-primary">
            <input type="radio" />
            Добавления
          </label>
        </div>



      <p className="mb-0">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled.
      </p>
    </div>
  );
};

export default DeskFilterDate;
