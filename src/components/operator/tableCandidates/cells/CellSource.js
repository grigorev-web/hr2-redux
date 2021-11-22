

import hhIcon from '../../../../images/icons/hh.ico';
import rabotaIcon from '../../../../images/icons/rabota.ico';
import plusIcon from '../../../../images/icons/plus.ico';
import vkIcon from '../../../../images/icons/vk.ico';
import avitoIcon from '../../../../images/icons/avito.ico';
import instaIcon from '../../../../images/icons/insta.ico';
import superjobIcon from '../../../../images/icons/superjob.ico';
import friendsIcon from '../../../../images/icons/friend.ico';


const CellSource = ({source}) =>{
  let src;
  let iconStyle = {width:'20px',margin:'0 10px'};
  switch (source) {
    case 'hh': src = <img title='hh.ru' src={hhIcon}  style={iconStyle}/> ;break;
    case 'rabota.ru': src = <img title="rabota.ru" src={rabotaIcon}  style={iconStyle}/> ;break;
    case 'vk_target': src = <img title="ВК таргет" src={vkIcon}  style={iconStyle}/> ;break;
    case 'vk_public': src = <img title="ВК паблики" src={vkIcon}  style={iconStyle}/> ;break;
    case 'avito': src = <img title="Авито" src={avitoIcon}  style={iconStyle}/> ;break;
    case 'inst_target': src = <img title="Инстаграм таргет" src={instaIcon}  style={iconStyle}/> ;break;
    case 'superjob': src = <img title="Superjob" src={superjobIcon}  style={iconStyle}/> ;break;
    case 'friends': src = <img title="Приведи друга" src={friendsIcon}  style={iconStyle}/> ;break;

    default: src = <img title={source} src={plusIcon} style={iconStyle}/>

  }


    return <td>
              <div> {src}</div>
           </td>
}

export default CellSource;
