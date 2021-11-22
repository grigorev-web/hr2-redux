import {useEffect,useState,useRef} from 'react';
import ModalLayout from './ModalLayout'
import {useDispatch, useSelector} from 'react-redux'
import OutsideAlerter from '../basic/OutsideAlerter';
import {asyncGetCardCandidate,handleFile} from '../../store/asyncActions';
import {FaUser,FaUpload} from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import {statuses, statusColors} from '../constants'

import Event from './Event';


const CandidateCard = () =>{

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState( + new Date());
  //console.log("REFRESH",refresh)
  const fileInputRef = useRef();

  const dispatch = useDispatch();
  const id = useSelector( state => state.modals.candidateCard.id);
  const candidate = useSelector( state => state.modals.candidateCard.candidate);
  const events = useSelector( state => state.modals.candidateCard.events);



  useEffect( ()=>{
    dispatch(asyncGetCardCandidate(id,setLoading));
  },[refresh]);

  function closeCard(){
    setLoading(true);
    dispatch({type:"CLOSE_MODAL", modal:"candidateCard"})
  }

  //console.log("CANDIDATE",candidate)
  if(loading || !id || !candidate) return null;

  return <ModalLayout>
          <OutsideAlerter handleClick={closeCard}>
            <div className="modal-dialog" role="document" style={{minWidth:'1100px',minHeight:'600px',maxHeight:'800px'}}>
          <div className="modal-content">
            <div className="modal-header bg-primary">

                <div className="text-light">{`#${candidate.id}`}</div>

                <button onClick={closeCard} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="text-white" aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
              <div className="row p-3">
                <div className="col-6 card-candidate">
                  <div className="d-flex align-items-center mb-1">
                      <div className="bg-light rounded-circle p-4">
                        <FaUser size="3em"/>
                      </div>
                      <div className="ml-3">
                        <h4>{candidate.name}</h4>
                        <h6>{candidate.phone}</h6>
                        <p>Проект</p>
                      </div>
                  </div>
                  <hr/>
                  <p>Город: {candidate.city ? candidate.city : 'не указано'}</p>
                  <p>email:</p>
                  <p>Статус: <span className={`mb-2 mr-2 badge badge-pill badge-${statusColors[candidate.status]}`}>{statuses[candidate.status]}</span></p>
                  <p>Резюме: {candidate.resume ? <a target="_blank" href={candidate.resume}>резюме</a> : 'не указано'}</p>
                  <p>Резюме PDF: {candidate.file ?
                    <a target="_blank" href={`http://10.105.0.8/dg/hh/api/resume/${candidate.file}`}>файл</a> :
                    <button onClick={()=>fileInputRef.current.click()} className="btn btn-outline-success ml-2 opacity-7" style={{padding:'0px 4px 2px 3px'}}><FaUpload /> загрузить</button>}
                    <input ref={fileInputRef} multiple={false} type="file" name="upload_file1" onChange={(e) => dispatch(handleFile(e,candidate.id,setRefresh))} hidden/>
                  </p>
                  <p>Источник: {candidate.source}</p>
                  <p>Дата добавления: {candidate.date}</p>
                  <p>Комментарий: {candidate.comment}</p>

                </div>


                <div className="col-6 card-events">

                  <h5 className="ml-4 mt-2">История</h5>
                  <div className="scrollbar-container ps ps--active-y">
                    <div className="p-2">
                      <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">

                        { events.map( event => <Event event={event} key={event[0].entry_id}/> )}

                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="modal-footer bg-light">
                
            </div>
          </div>
          </div>
          </OutsideAlerter>

         </ModalLayout>
}

export default CandidateCard;
