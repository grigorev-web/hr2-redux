import CityHead from "./heads/CityHead";
import HeadFIO from "./heads/HeadFIO";
import HeadHR from "./heads/HeadHR";
import StatusHead from "./heads/StatusHead";




const TableCandidatesHead = () => {
  return (
    <thead>
      <tr>

        <th className="text-center">#</th>
        <th className="text-center">Источник</th>
        <HeadFIO/>
        <CityHead /> 
        <StatusHead/>
        <HeadHR/>
      </tr>
    </thead>
  );
};

export default TableCandidatesHead;
