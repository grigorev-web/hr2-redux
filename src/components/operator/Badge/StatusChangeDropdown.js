import OutsideAlerter from '../../basic/OutsideAlerter';
import {asyncChangeStatus} from '../../../store/asyncActions';
import {useDispatch} from 'react-redux';

const StatusChangeDropdown = ({handleOutsideClick, id, status, phone}) => {

  const dispatch = useDispatch();

  function changeStatus(newStatus) {
    if(status === newStatus) { // если статус не изменен - закрываем и отмена
      handleOutsideClick();
      return;
    }
    handleOutsideClick(); // закрываем выпадающий список

    // если статус "приглашен" надо указать дату собеседования
    if(newStatus == '2') dispatch({type:"OPEN_MODAL_SOBESTIME", id:id, status:newStatus});
    else dispatch({type:"OPEN_MODAL_COMMENT", id:id, status:newStatus}); // обязательный комментарий для остальных статусов

  }

  return  <OutsideAlerter handleClick={handleOutsideClick}>

             <div tabIndex="-1" role="menu" aria-hidden="true" className="status-change-dropdown dropdown-menu show shadow-lg rounded" >
                        <ul className="nav flex-column">
                          <li  onClick={(e)=>changeStatus(0)} className="nav-item d-flex align-items-center ">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-secondary">Новый</div>
                              <a  className="nav-link">Новый</a>
                          </li>
                          <li onClick={(e)=>changeStatus(1)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-primary">Новый</div>
                              <a  className="nav-link">Перезвонить</a>
                          </li>
                          <li onClick={(e)=>changeStatus(2)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-success">Новый</div>
                              <a  className="nav-link">Приглашен</a>
                          </li>
                          <li onClick={(e)=>changeStatus(3)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-danger">Новый</div>
                              <a  className="nav-link">Отказался при звонке</a>
                          </li>
                          <li onClick={(e)=>changeStatus(4)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-info">Новый</div>
                              <a  className="nav-link">Нет ответа </a>
                          </li>
                          <li onClick={(e)=>changeStatus(5)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-dark">Новый</div>
                              <a  className="nav-link">связь прервалась</a>
                          </li>
                          <li onClick={(e)=>changeStatus(6)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-danger">Новый</div>
                              <a  className="nav-link">бросил трубку</a>
                          </li>
                          <li onClick={(e)=>changeStatus(7)} className="nav-item d-flex align-items-center">
                              <div className=" mr-2 badge badge-dot badge-dot-xl badge-dark">Новый</div>
                              <a  className="nav-link">отказ оператора</a>
                          </li>

                          <li className="nav-item-divider nav-item"></li>
                          <li className="nav-item-btn nav-item d-flex justify-content-between">
                              <button onClick={handleOutsideClick} className="btn-wide btn-shadow btn btn-secondary btn-sm">Отмена</button>
                              <button onClick={(e)=>changeStatus(41)} className="btn-wide btn-shadow btn btn-danger btn-sm">Удалить</button>
                              
                          </li>
                        </ul>
              </div>
          </OutsideAlerter>




}



export default StatusChangeDropdown;
