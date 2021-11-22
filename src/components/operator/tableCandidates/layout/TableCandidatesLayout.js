import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncGetMoreCandidates,
  asyncGetCandidatesInit,
} from "../../../../store/asyncActions";
import { BiRefresh } from "react-icons/bi";

const TableCandidatesLayout = ({ children }) => {
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates);
  const login = useSelector( state => state.login);
  function fetchMoreCandidates() {
    dispatch(asyncGetMoreCandidates());
  }

  function refreshTable() {
    dispatch(asyncGetCandidatesInit());
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="main-card mb-3 card">
          <div className="card-header">
            Список кандидатов
            <button
              className="btn btn-outline-success btn-sm ml-3"
              onClick={refreshTable}
            >
              <BiRefresh size="1.5em" />
            </button>
            <div className="btn-actions-pane-right">
              <div role="group" className="btn-group-sm btn-group">
                {/* <button className="active btn btn-info">Прош. неделя</button> */}
                <a href={`http://10.105.0.8/dg/hh/add_contact.php?hr=${login}`} target="_blank">
                  <button className="btn btn-outline-success btn-sm" title="Добавить кандидата">
                    +
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <InfiniteScroll
              dataLength={candidates}
              next={fetchMoreCandidates}
              hasMore={true}
              loader={<h4></h4>}
            >
              {children}
            </InfiniteScroll>
          </div>

          <div className="d-block text-center card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default TableCandidatesLayout;