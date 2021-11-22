import {useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {asyncGetCandidatesInit} from '../../../store/asyncActions';

import TableCandidatesLayout from "../../layout/TableCandidatesLayout";
import TableCandidatesHead from "./TableCandidatesHead";
import TableCandidatesRow from "./TableCandidatesRow";


const TableCandidates = () => {

  const candidates = useSelector( state => state.candidates);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(asyncGetCandidatesInit());
  },[]);


  if(!candidates.length) return <h2>Нет кандидатов</h2>;

  return (
    <TableCandidatesLayout>
      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
        <TableCandidatesHead />
        <tbody>
          {candidates.map( candidate => <TableCandidatesRow candidate={candidate} key={candidate.id}/> )}
        </tbody>
      </table>
    </TableCandidatesLayout>
  );
};

export default TableCandidates;
