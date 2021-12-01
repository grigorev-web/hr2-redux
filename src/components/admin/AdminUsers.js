import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../../store/asyncActions";
import Loader from "../basic/Loader";

const AdminUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return (
    <div className="col-6">
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header">Пользователи1</div>
        <div className="card-body scroll-area" style={{ height: 500 }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Login</th>
                <th scope="col">Имя</th>
                <th scope="col">Роль</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td>{user.comment}</td>
                    <td>{user.role}</td>
                  </tr>
                ))
              ) : (
                <Loader />
              )}
            </tbody>
          </table>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default AdminUsers;
