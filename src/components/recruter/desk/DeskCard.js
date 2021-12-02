//import avatar from "../../../../../images/avatar.jpg";

import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { formatDate } from "../../functions";

const DeskCard = ({ id, name, phone, sobes, project }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  function getCardCandidate(e) {
    e.preventDefault();
    dispatch({ type: "OPEN_CANDIDATE_CARD", id: id });
  }

  return (
    <div>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-3">
            <div className="widget-content-left">
              <FaUser size="1.5em" className="opacity-7" />
            </div>
          </div>
          <div className="widget-content-left flex2">
            <div className="widget-heading">
              <a onClick={getCardCandidate} href="/hh">
                {name}
              </a>
            </div>
            
            <div className="widget-subheading opacity-7">{phone}</div>
            <div
              className="widget-subheading opacity-7 text-warning"
              style={{ fontSize: 13, lineHeight: "0.8" }}
            >
              {sobes ? formatDate(sobes) : ""}
            </div>
            <div className="widget-subheading opacity-9">
              {project ? projects[project] : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskCard;
