import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import MainMenu from "./components/menus/MainMenu";
import AdminPage from "./components/admin";

import {homepage} from "./components/constants";

import Operator from "./components/operator";
import Recruter from "./components/recruter";
import LoginPage from './components/login/LoginPage';
import Modals from './components/modals/Modals';



import {useSelector} from 'react-redux';

function App() {


  const login = useSelector( state => state.login);

  if(!login) return <LoginPage/>;

  return (
    <BrowserRouter>
      <AppContainer>
        <MainMenu />
        <Modals />

        <Routes>
          <Route path={`${homepage}/`} element={<Operator />} />
          <Route path={`${homepage}/operator`} element={<Operator />} />
          <Route path={`${homepage}/recruter`} element={<Recruter />} />
          <Route path={`${homepage}/admin`} element={<AdminPage />} />
        </Routes>

      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
