import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../images/header-image.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="sign-up"
          element={
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div className="header__auth">
                <p className="header__text">{props.email}</p>
                <p className="header__exit" onClick={props.onSignOut}>
                  Выйти
                </p>
              </div>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
