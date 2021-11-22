
import {useSelector} from "react-redux";

const Loader = () => {

  const loading = useSelector( state => state.loading)

  if(!loading) return null;

  return <div className="app-drawer-overlay" >
                    <div className="lds-dual-ring">
                      
                    </div>
          </div>
}


export default Loader;
