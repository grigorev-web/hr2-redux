import Toasts from '../basic/Toasts'

const AppContainer = ({children}) => {
    return (
        <div className="app-container app-theme-white">
          <div className="app-main">
           {children}
           <Toasts/>
          </div>
        </div>
      );
}

export default AppContainer;
