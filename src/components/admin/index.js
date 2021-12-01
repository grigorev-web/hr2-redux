import { useSelector } from "react-redux";
import PageLayout from "../layout/PageLayout";
import AdminProjects from "./AdminProjects";
import AdminUsers from "./AdminUsers";

const AdminPage = () => {
  const role = useSelector((state) => state.role);
  return (
    <PageLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">Администратор</div>
          </div>
        </div>
      </div>
      {role === "admin" ? (
        <div className="row">
          <AdminProjects />
          <AdminUsers />
        </div>
      ) : (
        <div>Нет доступа</div>
      )}
    </PageLayout>
  );
};

export default AdminPage;
