
import {
  FaHeadset,
  FaUserTie,
  FaUserShield,
  FaRegTimesCircle,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {homepage} from "../constants";

const MainMenu = () => {
  return (
    <div className="app-sidebar closed-sidebar bg-royal sidebar-text-light sidebar-shadow">
      <div className="app-sidebar__inner">
        {/* <h5 className="app-sidebar__heading">Forms</h5> */}
        <div className="metismenu vertical-nav-menu">
          <ul className="metismenu-container">
            <li className="metismenu-item">
              <Link to={`${homepage}/operator`} className="metismenu-link" >
                <div className="d-flex">
                  <FaHeadset />
                  <p>Оператор</p>
                </div>
              </Link>
            </li>
            <li className="metismenu-item">
              <Link to={`${homepage}/recruter`} className="metismenu-link" >
                <div className="d-flex">
                  <FaUserTie />
                  <p>Рекрутер</p>
                </div>
              </Link>
            </li>
            <li className="metismenu-item">
              <Link to={`${homepage}/admin`} className="metismenu-link" >
                <div className="d-flex">
                  <FaUserShield />
                  <p>Администратор</p>
                </div>
              </Link>
            </li>
            <li className="metismenu-item">
              <Link to={`${homepage}/settings`} className="metismenu-link" >
                <div className="d-flex">
                  <FaCog />
                  <p>Настройки</p>
                </div>
              </Link>
            </li>
            <li className="metismenu-item">
              <Link to={`${homepage}/logout`} className="metismenu-link">
                <div className="d-flex">
                  <FaRegTimesCircle />
                  <p>Выйти</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
