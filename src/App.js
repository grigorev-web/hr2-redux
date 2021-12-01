import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/datepicker.css";
import AppContainer from "./components/layout/AppContainer";
import MainMenu from "./components/menus/MainMenu";
import AdminPage from "./components/admin";

import { homepage } from "./components/constants";

import Operator from "./components/operator";
import Recruter from "./components/recruter";
import LoginPage from "./components/login/LoginPage";
import Modals from "./components/modals/Modals";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncGetInitSettings } from "./store/asyncActions";

function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if(login)dispatch(asyncGetInitSettings()); // Загрузка начальных настроек с сервера после авторизации
  }, [login]);

  if (!login) return <LoginPage />; // если не авторизован

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
