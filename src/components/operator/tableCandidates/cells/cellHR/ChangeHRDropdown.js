import OutsideAlerter from '../../../../basic/OutsideAlerter'
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {asyncGetUsers,asyncChangeHR} from '../../../../../store/asyncActions';

const ChangeHRDropdown = ({candidate, handleOutsideClick}) => {

  const dispatch = useDispatch();
  const users = useSelector( state => state.users);
  useEffect( ()=>{dispatch(asyncGetUsers())}, []);

  function changeHR(hr){
    dispatch( asyncChangeHR(hr, candidate.id));
    handleOutsideClick(); // закрыть dropdown
  }




  return  <OutsideAlerter handleClick={handleOutsideClick}>

             <div tabIndex="-1" role="menu" aria-hidden="true" className="status-change-dropdown dropdown-menu show shadow-lg rounded" >
                        <ul className="nav flex-column">
                          {users.length ? "" : " Загрузка..."}
                          {users.map( (user)=>{
                            return <li  key={user.id} onClick={(e)=>changeHR(user.login)} className="nav-item d-flex align-items-center ">
                                        <div className=" mr-2 badge badge-dot badge-dot-xl badge-secondary">{user.login}</div>
                                        <a  className="nav-link" style={{padding: '0.3rem 1rem'}}>{user.login}</a>
                                   </li>
                          })}

                        </ul>
              </div>
          </OutsideAlerter>

}

export default ChangeHRDropdown;
