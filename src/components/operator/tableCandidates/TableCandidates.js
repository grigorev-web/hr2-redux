import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncGetCandidatesInit } from "../../../store/asyncActions";

import TableCandidatesLayout from "./layout/TableCandidatesLayout";
import TableCandidatesHead from "./TableCandidatesHead";
import TableCandidatesRow from "./TableCandidatesRow";

const TableCandidates = () => {

  const candidates = useSelector((state) => state.candidates);
  const filter = useSelector((state) => state.filterTable);
  const dispatch = useDispatch();

  // при загрузке
  useEffect(() => {
    console.log("use effect table");
    // если включен фильтр
    if (Array.isArray(filter) && filter.length) {
      console.log("FILTER CHANGE");
      dispatch(asyncGetCandidatesInit());
    } else {
      // при загрузке, при отключенном фильтре
      //alert("FILTER CHANGE");
      dispatch(asyncGetCandidatesInit());
    }
  }, [filter]); // зависимость от фильтра

  // FILTER
  // useEffect(()=>{
  //   if(Array.isArray(filter) && filter.length) {
  //     console.log("FILTER CHANGE")
  //     dispatch(asyncGetCandidatesInit());
  //   };
  // },[filter]);

  console.log("FILTER", filter);

  if (!candidates.length) return <h2>Нет кандидатов</h2>;

  return (
    <TableCandidatesLayout>
      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
        <TableCandidatesHead />
        <tbody>
          {candidates.map((candidate) => (
            <TableCandidatesRow candidate={candidate} key={candidate.id} />
          ))}
        </tbody>
      </table>
    </TableCandidatesLayout>
  );
};

export default TableCandidates;
