import { useState } from "react";
import { useSelector } from "react-redux";
import FilterFIO from "../fllter/fio/FilterFIO";
import InputFIO from "../fllter/fio/InputFIO";
import SortFIO from "../fllter/fio/SortFIO";

const HeadFIO = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filter = useSelector((state) => state.filterTable);

  return (
    <th
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
              <SortFIO />
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
