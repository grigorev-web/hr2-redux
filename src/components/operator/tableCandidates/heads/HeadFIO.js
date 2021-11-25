import { useState } from "react";
import { useSelector } from "react-redux";
import FilterFIO from "../fllter/fio/FilterFIO";
import InputFIO from "../fllter/fio/InputFIO";

import SortIcon from "../fllter/SortIcon";

const HeadFIO = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filter = useSelector((state) => state.filterTable);

  return (
    <th
      style={{width:300}}
      className="text-center"
      onMouseEnter={() => {
        setShowFilters(true);
      }}
      onMouseLeave={() => {
        setShowFilters(false);
      }}
    >
      <div className="d-flex justify-content-between">
        <div>ФИО</div>

        {showFilters || filter.some((obj) => "namephone" in obj) ? (
          <>
            <div>
              <InputFIO />
            </div>
            <div className="d-flex">
              <SortIcon />
              <FilterFIO />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </th>
  );
};

export default HeadFIO;
