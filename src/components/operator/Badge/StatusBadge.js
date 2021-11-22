import {statusColors,statuses} from "../../constants"
import {useState} from 'react';
import StatusChangeDropdown from './StatusChangeDropdown'


const StatusBadge = ({id, status, phone}) => {

    const [dropdown, setDropdown] = useState(false);

    function toggleBadge(e){
      setDropdown( !dropdown);

    }

    return <div className="dropdown d-inline-block" style={{width:'200px'}}>
            <button className={`btn btn-sm w-100 dropdown-toggle btn-${statusColors[status]}`}
                    onClick={toggleBadge}>
              {statuses[status]}
           </button>


            { dropdown ? <StatusChangeDropdown
                            handleOutsideClick={toggleBadge}
                            id={id}
                            status={status}
                            phone={phone}
                            /> : ''}

           </div>
}

export default StatusBadge;
