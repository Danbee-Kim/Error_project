import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailPage from 'pages/DetailPage';
import FormPage from 'pages/FormPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
import { loginCheck } from 'redux/modules/loginSlice';

const Router = () => {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(loginCheck());
  }, [dispatch]);

  return (

      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/main" /> : <LoginPage/>}
        />
        <Route
          path="/signup"
          element={isLogin ? <SignupPage/> : < Navigate to="/signup"/>}
        />
        <Route
          path="/main"
          element={isLogin ? <MainPage/> : <Navigate to="/login" />}
        />
         <Route
          path="/write"
          element={isLogin ? <FormPage/> : < Navigate to="/"/>}
        />
        <Route
          path="/detail/:id"
          element={isLogin ? <DetailPage /> : <Navigate to= "/detail/:id"/>}
        />
        <Route
          path="/detail"
          element={isLogin ? <DetailPage/> : <Navigate to="/" />}
        />
  
      </Routes>
 
  );
};

export default Router;