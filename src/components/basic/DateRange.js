import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const DateRange = ({ onChange }) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());


  function changeHandler(date, from = false) {
    if (from) {
      setFromDate(date);
      onChange([date, toDate]);
    } else {
      setToDate(date);
      onChange([fromDate, date]);
    }
  }


  return (
    <div>
      <div className="mb-2">
        <ReactDatePicker
          selected={fromDate}
          onChange={(date) => changeHandler(date, 1)}
          value={fromDate}
        />
      </div>
      <div className="mb-2">
        <ReactDatePicker
          selected={toDate}
          onChange={(date) => changeHandler(date)}
          value={toDate}
        />
      </div>
    </div>
  );
};

export default DateRange;
