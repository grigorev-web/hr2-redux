import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  asyncGetCandidatesInit,
  asyncGetCandidatesFilter,
} from "../../../store/asyncActions";

import TableCandidatesLayout from "./layout/TableCandidatesLayout";
import TableCandidatesHead from "./TableCandidatesHead";
import TableCandidatesRow from "./TableCandidatesRow";

const TableCandidates = () => {
  const filter = useSelector((state) => state.filterTable);
  const dispatch = useDispatch();

  // при загрузке
  useEffect(() => {
    dispatch(asyncGetCandidatesInit());
  }, [filter]); // зависимость от фильтра

  const candidates = useSelector((state) => state.candidates);

  console.log("FILTER", filter);

  return (
    <TableCandidatesLayout>
      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
        <TableCandidatesHead />
        <tbody>
          {candidates.length ? (
            candidates.map((candidate) => (
              <TableCandidatesRow candidate={candidate} key={candidate.id} />
            ))
          ) : (
            
              <tr><td colSpan="6">не найдено</td></tr>
            
          )}
        </tbody>
      </table>
    </TableCandidatesLayout>
  );
};

export default TableCandidates;
