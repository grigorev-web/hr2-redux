
import {useState} from 'react';
import StatusChangeDropdown from './ChangeHRDropdown'



const CellHR = ({candidate}) => {

  const [dropdown, setDropdown] = useState(false);

  function closeDropdown(){
    setDropdown(false);
  }

  return (
    <td>
        <div className="dropdown d-inline-block" style={{width:'200px'}}>
        <button className="btn btn-sm btn-outline-dark border-0"
                style={{minWidth:'100px'}}
                onClick={(e)=>{setDropdown(!dropdown)}}>

                  {candidate.hr}
        </button>
        {dropdown ? <StatusChangeDropdown candidate={candidate} handleOutsideClick={closeDropdown}/> : ''}
        </div>
    </td>
  );
};

export default CellHR;
