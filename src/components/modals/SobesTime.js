
import {useState} from 'react';

import ModalLayout from './ModalLayout'
import OutsideAlerter from '../basic/OutsideAlerter'
import {useSelector, useDispatch} from 'react-redux'
import {statuses, statusColors} from '../constants'
import {asyncChangeStatus,showToast} from '../../store/asyncActions'


const SobesTime = () =>{

  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const modal = useSelector( state => state.modals.sobesTime);


  function closeModal(cancel = true){
    //console.log('close modal')
    dispatch({type:"CLOSE_MODAL", modal:"sobesTime"})
    if(cancel) dispatch( showToast("Отменено","danger"))
  }


  function saveStatus(){
    //console.log("date", `${date} ${time}:00`)
    if(!date){alert("Введите дату собеседования");return;}
    if(!time){alert("Введите время собеседования");return;}
    if(!comment){alert("Комментарий обязателен");return;}

    dispatch(asyncChangeStatus(modal.id, modal.status, comment, `${date} ${time}:00`, closeModal));
  }

  return <ModalLayout>
          <OutsideAlerter handleClick={closeModal}>
            <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Введите время собеседования</h5>

                <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center">
                <div className={`m-2 badge badge-dot badge-dot-xl badge-${statusColors[modal.status]}`}>1</div>
                <div>{statuses[modal.status]}</div>
              </div>
              <hr/>
              <div className="d-flex">
              <div className="m-2">
                <p>Дата:</p>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
              </div>
              <div  className="m-2">
                <p>Время:</p>
                <input type="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
              </div>
              </div>

                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="form-control"></textarea>
            </div>
            <div className="modal-footer">
                <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <button onClick={saveStatus} type="button" className="btn btn-primary">Сохранить</button>
            </div>
          </div>
          </div>
          </OutsideAlerter>
        </ModalLayout>
}

export default SobesTime;
