import { useEffect, useState, useRef } from "react";
import ModalLayout from "./ModalLayout";
import { useDispatch, useSelector } from "react-redux";
import OutsideAlerter from "../basic/OutsideAlerter";
import { asyncChangeCandidateComment, asyncChangeCandidateEmail, asyncGetCardCandidate, handleFile } from "../../store/asyncActions";
import { FaUser, FaUpload } from "react-icons/fa";
//import { FiEdit3 } from "react-icons/fi";
import { statuses, statusColors } from "../constants";

import Event from "./Event";
import CellProject from "../operator/tableCandidates/cells/cellProject/CellProject";
import { formatDate } from "../functions";
import EditableCell from "../basic/EditableCell";

const CandidateCard = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(+new Date());
  //console.log("REFRESH",refresh)
  const fileInputRef = useRef();

  const dispatch = useDispatch();
  const id = useSelector((state) => state.modals.candidateCard.id);
  const candidate = useSelector(
    (state) => state.modals.candidateCard.candidate
  );
  const events = useSelector((state) => state.modals.candidateCard.events);

  useEffect(() => {
    dispatch(asyncGetCardCandidate(id, setLoading));
  }, [refresh]);

  function closeCard() {
    setLoading(true);
    dispatch({ type: "CLOSE_MODAL", modal: "candidateCard" });
  }

  //console.log("CANDIDATE",candidate)
  if (loading || !id || !candidate) return null;

  return (
    <ModalLayout>
      <OutsideAlerter handleClick={closeCard}>
        <div
          className="modal-dialog"
          role="document"
          style={{ minWidth: "1100px", minHeight: "600px", maxHeight: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <div className="text-light">{`#${candidate.id}`}</div>

              <button
                onClick={closeCard}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="text-white" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row p-3">
                <div className="col-6 card-candidate">
                  <div className="d-flex align-items-center mb-1">
                    <div className="bg-light rounded-circle p-4">
                      <FaUser size="3em" />
                    </div>
                    <div className="ml-3">
                      <h4>{candidate.name}</h4>
                      <h6>{candidate.phone}</h6>
                      <div className="border project-label">
                        <CellProject candidate={candidate} />
                      </div>
                    </div>
                  </div>

                  <table className="table table-bordered">
                    <tr>
                      <td style={{ width: "40%" }}>Город</td>
                      <td>{candidate.city ? candidate.city : "не указано"}</td>
                    </tr>
                    <tr>
                      <td>email</td>
                      <td><EditableCell
                          value={candidate.email}
                          callback={ (val) =>dispatch(asyncChangeCandidateEmail(id, val)) }
                        /></td>
                    </tr>
                    <tr>
                      <td>Статус</td>
                      <td>
                        {" "}
                        <span
                          className={`badge badge-pill badge-${
                            statusColors[candidate.status]
                          }`}
                        >
                          {statuses[candidate.status]}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Резюме</td>
                      <td>
                        {" "}
                        {candidate.resume ? (
                          <a target="_blank" href={candidate.resume}>
                            резюме
                          </a>
                        ) : (
                          "не указано"
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>Резюме PDF</td>
                      <td>
                        {" "}
                        {candidate.file ? (
                          <a
                            target="_blank"
                            href={`http://10.105.0.8/dg/hh/api/resume/${candidate.file}`}
                          >
                            файл
                          </a>
                        ) : (
                          <button
                            onClick={() => fileInputRef.current.click()}
                            className="btn btn-outline-success ml-2 opacity-7"
                            style={{ padding: "0px 4px 2px 3px" }}
                          >
                            <FaUpload /> загрузить
                          </button>
                        )}
                        <input
                          ref={fileInputRef}
                          multiple={false}
                          type="file"
                          name="upload_file1"
                          onChange={(e) =>
                            dispatch(handleFile(e, candidate.id, setRefresh))
                          }
                          hidden
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Источник</td>
                      <td>{candidate.source}</td>
                    </tr>

                    <tr>
                      <td>Дата добавления</td>
                      <td>{formatDate(candidate.date)}</td>
                    </tr>

                    <tr>
                      <td>Дата собеседования</td>
                      <td className="text-warning">{formatDate(candidate.sobes)}</td>
                    </tr>

                    <tr>
                      <td>Комментарий</td>
                      <td>
                        <EditableCell
                          value={candidate.comment}
                          callback={ (val) =>dispatch(asyncChangeCandidateComment(id, val)) }
                        />
                      </td>
                    </tr>
                  </table>
                </div>

                <div className="col-6 card-events">
                  <h5 className="ml-4 mt-2">История</h5>
                  <div className="scrollbar-container ps ps--active-y">
                    <div className="p-2">
                      <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                        {events.map((event) => (
                          <Event event={event} key={event[0].entry_id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light"></div>
          </div>
        </div>
      </OutsideAlerter>
    </ModalLayout>
  );
};

export default CandidateCard;
