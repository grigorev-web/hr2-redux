
import logo_small from "../../images/logo_small.svg";
import axios from 'axios';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginPage(props){

  const[login, setLogin] = useState('');
  const[pass,setPass] = useState('');

  const dispatch = useDispatch();
  const state = useSelector( state => state);


  function loginClickHandler(e){
    e.preventDefault();
    console.log("LOGIN CLICK HANDLER")
    axios(`http://10.105.0.8/hh/api/v2/auth?login=${login}&pass=${pass}&env=${state.env}`) // и так сойдет
      .then(function (response) {
        console.log(response);

        if(!response.data.login) {
          alert('Неправильный логин или пароль');
        }else {
          //alert("auth success: " + response.data.login)
          //alert(response.data.role)
          dispatch({type:"LOGIN",login: response.data.login, role: response.data.role})
      }
        //console.log("ONLOAD_TABLE");
      //  if(response.data.success) alert("Контакты успешно загружены!")
      })


  }


  console.log("login",login)


  return <div className="row login-page">

  <img className="login-logo" src={logo_small} alt="мс контакт лого"/>

  <form className="login-container" onSubmit={ (e)=>loginClickHandler(e)}>

  <div className="form-group">

    <input type="text"
           className="form-control"
           placeholder="Логин"
           onChange={(e)=> setLogin(e.target.value)}
          />
  </div>

  <div className="form-group">

    <input type="password"
           className="form-control mt-4"
           placeholder="Пароль"
           onChange={(e)=> setPass(e.target.value)}
           />
  </div>

  <button className="btn btn-primary mt-3"
          onClick={ (e)=>loginClickHandler(e)}
          type="submit"
          >
          Вход
  </button>

  </form>

</div>
}
