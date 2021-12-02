import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectChangeDropdown from "./ProjectChangeDropdown";





const CellProject = ({ candidate }) => {

  const [dropdown, setDropdown] = useState(false);
  const projects = useSelector((state) => state.projects);

  function closeDropdown(){
    setDropdown(false);
  }
  return <div className="dropdown d-inline-block" style={{width:'200px',textAlign:'center',margin:5}}>
        <button className="btn btn-sm btn-outline-dark border-0"
                style={{minWidth:'100px'}}
                onClick={(e)=>{setDropdown(!dropdown)}}
                title={candidate.project && (candidate.project in projects)? "Сменить проект" : "Добавить проект"}
                >

                {candidate.project && (candidate.project in projects)? projects[candidate.project] : "добавить"}
        </button>
        {dropdown ? <ProjectChangeDropdown candidate={candidate} handleOutsideClick={closeDropdown}/> : ''}
        </div>
      
};

export default CellProject;
