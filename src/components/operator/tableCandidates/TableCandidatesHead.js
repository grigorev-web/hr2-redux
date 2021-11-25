import HeadCity from "./heads/HeadCity";
import HeadFIO from "./heads/HeadFIO";
import HeadHR from "./heads/HeadHR";
import HeadSource from "./heads/HeadSource";
import StatusHead from "./heads/StatusHead";




const TableCandidatesHead = () => {
  return (
    <thead>
      <tr>

        <th className="text-center" style={{width:'8%'}}>#</th>
        <HeadSource/>
        <HeadFIO/>
        <HeadCity /> 
        <StatusHead/>
        <th className="text-center" style={{width:'8%'}}>Проект</th>
        <HeadHR/>
      </tr>
    </thead>
  );
};

export default TableCandidatesHead;
