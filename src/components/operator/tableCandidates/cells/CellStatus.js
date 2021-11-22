import StatusBadge from "../../Badge/StatusBadge";


const CellStatus = ({id, status, phone}) =>{
    return <td>
            <StatusBadge id={id} status={status} phone={phone}/>
           </td>
}

export default CellStatus;
