
import {statuses, statusColors} from '../constants';
import {formatDate} from '../functions';

const Event = ({event}) =>{

  let status,hr,comment;

  event.map( (field)=>{
    if(field.field_id === 201) status = field.value;
    if(field.field_id === 38) hr = field.value;
    if(field.field_id === 62) comment = field.value;
    return false;
  });

  let date = formatDate(event[0].date);

  return <div className={`vertical-timeline-item dot-${statusColors[status]} vertical-timeline-element`}>
            <div>
                <span className="vertical-timeline-element-icon bounce-in"></span>
                <div className="vertical-timeline-element-content bounce-in">
                  <div className="vertical-timline-date-leftside"><b className="opacity-8">{date}</b></div>
                  <div className="timeline-title">

                      <div><b>{hr}</b>:  {statuses[status]}</div>
                  </div>

                  <div><i className="opacity-8">{comment}</i></div>

                </div>
            </div>
         </div>
}

export default Event;
