import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";



import {useSelector,useDispatch} from 'react-redux';
import DeskColumn from './DeskColumn';
import RecruterFilter from './RecruterFilter'
import {statuses} from '../../constants';
import {asyncGetDeskCandidates, asyncChangeStatusDesk} from '../../../store/asyncActions'


const RecruterDesk = () => {


  const [drag, setDrag] = useState(false);

  const candidates = useSelector( state => state.deskCandidates);
  const dispatch = useDispatch();

  useEffect( ()=>{
    dispatch(asyncGetDeskCandidates());
  },[]);
  const columns = ['2','10','12','13','14','20','23','24','25'];
  const bottomColumns = ['11','21','22','26','30','31'];
  const bottomStatusesStyle ={
    position: 'fixed',
    bottom: '40px',
    width: '90%',
    height: '200px',
    margin: '20px',
    zIndex: drag ? '10': '-1',
    opacity: drag ? '1': '0',
  }
  function onDragEnd(result) {
    setDrag(false);
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) return;
    if(result.source.droppableId === result.destination.droppableId) return; // если перемещение на ту же колонку

    let newStatus = destination.droppableId.substr(9); // новый статус
    let id = source.index; // id кандидата
    console.log("SOURCE",source);
    if( newStatus === '13') dispatch({type:"OPEN_MODAL_SOBESTIME", id:id, status:newStatus, phone:source.phone});
    else dispatch({type:"OPEN_MODAL_COMMENT", id:id, status:newStatus, phone:source.phone})
  }

  function onDragStart() {
    setDrag(true);
  };
  //console.log(candidates);
  //return null;
  return (<>
      {/*<RecruterFilter/>*/}
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>

    <div className="d-flex">
      {Object.entries(statuses).map( ([key,value]) => { if( columns.includes(key))
                                                        return <DeskColumn
                                                                  key={key}
                                                                  statusName={value}
                                                                  droppableId={`droppable${key}`}
                                                                  items={candidates.filter( item => item.status == key)}
                                                        />}
                                      )}
        <div className={`bottom-statuses d-flex justify-content-between`} style={bottomStatusesStyle}>
        {Object.entries(statuses).map( ([key,value]) => { if( bottomColumns.includes(key))
                                                          return <DeskColumn
                                                                    key={key}
                                                                    statusName={value}
                                                                    droppableId={`droppable${key}`}
                                                                    items={candidates.filter( item => item.status == key)}
                                                                    bottom={true}
                                                          />}
                                        )}
        </div>
        </div>

    </DragDropContext>
    </>
  );
};

export default RecruterDesk;
