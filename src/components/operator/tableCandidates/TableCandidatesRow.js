import CellSource from "./cells/CellSource";
import CellHR from "./cells/cellHR/CellHR";
import CellCity from "./cells/CellCity";
import CellID from "./cells/CellID";
import CellName from "./cells/CellName";
import CellStatus from "./cells/CellStatus";
import CellProject from "./cells/cellProject/CellProject";



const TableCandidatesRow = ({candidate}) => {

    return <tr>

        <CellID id={candidate.id} source={candidate.source}/>
        <CellSource source={candidate.source}/>
        <CellName id={candidate.id} name={candidate.name} phone={candidate.phone} />
        <CellCity city={candidate.city}/>
        <CellStatus id={candidate.id} status={candidate.status} phone={candidate.phone}/>
        <td><CellProject candidate={candidate} /></td>
        <CellHR candidate={candidate}/>
    </tr>
}

export default TableCandidatesRow;
