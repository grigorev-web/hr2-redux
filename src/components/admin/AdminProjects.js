import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../store/API";
import { showToast } from "../../store/asyncActions";
import Loader from "../basic/Loader";

const AdminProjects = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const API = api(dispatch, state);
  const [projects, setProjects] = useState([]);

  const [inputProjectName, setInputProjectName] = useState("");
  const [inputProjectComment, setInputProjectComment] = useState("");

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    API.get(`projects`).then((response) => {
      console.log("PROJECTS", response.data);
      setProjects(response.data.projects);
    });
  }

  function deleteProject(id) {
    // alert("DELETE: " + id)
    if (
      window.confirm(
        "Удалить проект " +
          projects.filter((project) => project.id === id)[0].name +
          " ?"
      )
    ) {
      setProjects(projects.filter((project) => project.id !== id));
      API.delete(`projects/${id}/delete`).then((response) => {
        console.log("PROJECTS DELETE", response.data);
      });
    } else dispatch(showToast("Отменено", "danger"));
    //setProjects(projects.filter( project=>project.id !== id));
  }

  function addProject() {
    API.post("projects/add", {
      name: inputProjectName,
      comment: inputProjectComment,
    }).then((response) => {
      console.log("ADD PROJECT", response.data);
      getProjects();
      setInputProjectName("");
      setInputProjectComment("");
    });
  }
  return (
    <div className="col-6">
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header">Проекты</div>
        <div className="card-body scroll-area" style={{ height: 500 }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Название</th>
                <th scope="col">Комментарий</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {projects.length ? (
                projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.comment}</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteProject(project.id)}
                        title="Удалить проект"
                        className="btn btn-sm btn-outline-danger"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <Loader />
              )}
              <tr className="bg-light">
                <td>+</td>
                <td>
                  <input
                    type="text"
                    placeholder="Введите название"
                    className="form-control"
                    value={inputProjectName}
                    onChange={(e) => setInputProjectName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Введите комментарий"
                    className="form-control"
                    value={inputProjectComment}
                    onChange={(e) => setInputProjectComment(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-success"
                    onClick={addProject}
                  >
                    Добавить
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default AdminProjects;
