
import {useSelector} from 'react-redux';

const Toasts = () =>{
  let offset = -100;

  const toasts = useSelector( state => state.toasts);
  if(!toasts.length) return null;
  return <>
            {toasts.map( toast => {
                offset += 120;
                return <div className={`toast bg-${toast.color}`} key={toast.id} style={{top:offset,opacity: toast.display}}>
                          <div className="toast-message p-4">{toast.message}</div>
                      </div>
              })
            }
          </>
}
export default Toasts;
