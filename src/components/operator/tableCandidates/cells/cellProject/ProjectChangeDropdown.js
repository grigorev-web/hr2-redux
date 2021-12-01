import OutsideAlerter from "../../../../basic/OutsideAlerter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetprojects,
  asyncChangeHR,
  asyncChangeProject,
} from "../../../../../store/asyncActions";
import api from "../../../../../store/API";

const ProjectChangeDropdown = ({ candidate, handleOutsideClick }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const API = api(dispatch, state);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    API.get(`projects`).then((response) => {
      console.log("PROJECTS", response.data);
      setProjects(response.data.projects);
      dispatch({type:"UPDATE_PROJECTS", projects: response.data.projects})
    });
  }

  function changeProject(project_id) {
    dispatch(asyncChangeProject(project_id, candidate.id));
    //alert('new project id: '+id);
    handleOutsideClick(); // закрыть dropdown
  }

  return (
    <OutsideAlerter handleClick={handleOutsideClick}>
      <div
        tabIndex="-1"
        role="menu"
        aria-hidden="true"
        className="status-change-dropdown dropdown-menu show shadow-lg rounded"
      >
        <ul className="nav flex-column">
          {projects.length
            ? projects.map((project) => {
                return (
                  <li
                    key={project.id}
                    onClick={(e) => changeProject(project.id)}
                    className="nav-item d-flex align-items-center "
                  >
                    <div className=" mr-2 badge badge-dot badge-dot-xl badge-secondary">
                      {project.name}
                    </div>
                    <a className="nav-link" style={{ padding: "0.3rem 1rem" }}>
                      {project.name}
                    </a>
                  </li>
                );
              })
            : " Загрузка..."}
        </ul>
      </div>
    </OutsideAlerter>
  );
};

export default ProjectChangeDropdown;
