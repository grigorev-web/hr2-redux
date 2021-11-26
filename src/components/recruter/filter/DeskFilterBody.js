import DeskFilterDate from "./DeskFilterDate";

import DeskFilterHR from "./DeskFilterHR";

const DeskFilterBody = () => {
  return (
    <div className="main-card mb-3 card">
      <div className="card-header">Фильтр</div>
      <div className="card-body">
        <DeskFilterDate/>
        <DeskFilterHR/>
      </div>
      
      <div className="d-block text-right card-footer">
        <button className="mr-2 btn btn-link btn-sm">Cancel</button>
        <button className="btn btn-success btn-lg">Save</button>
      </div>
    </div>
  );
};

export default DeskFilterBody;
