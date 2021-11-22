
import Loader from "../basic/Loader";

const PageLayout = ({ children }) => {
  return (<>
    <div className="app-main__outer">
      <div className="app-main__inner">{children}</div>
    </div>
    <Loader />
    </>
  );
};

export default PageLayout;
