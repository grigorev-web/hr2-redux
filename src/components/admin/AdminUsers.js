import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncChangeUserComment, asyncGetUsers } from "../../store/asyncActions";
import EditableCell from "../basic/EditableCell";
import Loader from "../basic/Loader";

const AdminUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  function onCommentChange(userID,newValue) {
    //console.log('onCommentChange',us)
    dispatch( asyncChangeUserComment(userID, newValue) );
  }

  return (
    <div className="col-6">
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header">Пользователи</div>
        <div className="card-body scroll-area" style={{ height: 500 }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Login</th>
                <th scope="col">Имя (ред.)</th>
                <th scope="col">Роль</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td style={{ width: "40%" }}>
                      <EditableCell
                        value={user.comment}
                        callback={(val)=>onCommentChange(user.id,val)}
                      />
                    </td>
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
