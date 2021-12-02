import HeadCity from "./heads/HeadCity";
import HeadFIO from "./heads/HeadFIO";
import HeadHR from "./heads/HeadHR";
import HeadProject from "./heads/HeadProject";
import HeadSource from "./heads/HeadSource";
import HeadStatus from "./heads/HeadStatus";




const TableCandidatesHead = () => {
  return (
    <thead>
      <tr>

        <th className="text-center" style={{width:'8%'}}>#</th>
        <HeadSource/>
        <HeadFIO/>
        <HeadCity /> 
        <HeadStatus/>
        <HeadProject/>
        <HeadHR/>
      </tr>
    </thead>
  );
};

export default TableCandidatesHead;
