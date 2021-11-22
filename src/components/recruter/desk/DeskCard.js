//import avatar from "../../../../../images/avatar.jpg";

import {useDispatch} from "react-redux";
import {FaUser} from "react-icons/fa";


const DeskCard = ({id, name, phone}) => {

  const dispatch = useDispatch();

  function getCardCandidate(e){
    e.preventDefault();
    dispatch({type:"OPEN_CANDIDATE_CARD", id:id})
  }

  return (
    <div>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-3">
            <div className="widget-content-left">
              <FaUser size="1.5em" className="opacity-7"/>
            </div>
          </div>
          <div className="widget-content-left flex2">
            <div className="widget-heading"><a onClick={getCardCandidate} href="/hh">{name}</a></div>
            <div className="widget-subheading opacity-7">{phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskCard;
