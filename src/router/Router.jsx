// import { useEffect } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import DetailPage from 'pages/DetailPage';
// import FormPage from 'pages/FormPage';
// import LoginPage from 'pages/LoginPage';
// import MainPage from 'pages/MainPage';
// import SignupPage from 'pages/SignupPage';
// import { loginCheck } from 'redux/modules/loginSlice';

// const Router = () => {
//   const dispatch = useDispatch();

//   const { isLogin } = useSelector((state) => state.login);

//   useEffect(() => {
//     dispatch(loginCheck());
//   }, [dispatch]);

//   return (

//       <Routes>
//         <Route
//           path="/"
//           element={isLogin ? <Main/> : <LoginPage/>}
//         />
//         <Route
//           path="/signup"
//           element={isLogin ? <SignupPage/> : < SignupPage/>}
//         />
//         <Route
//           path="/main"
//           element={isLogin ? <MainPage/> : <LoginPage/>}
//         />
//          <Route
//           path="/write"
//           element={isLogin ? <FormPage/> : <LoginPage/>}
//         />
//         <Route
//           path="/detail/:id"
//           element={isLogin ? <DetailPage /> : <LoginPage/>}
//         />
//         <Route
//           path="/detail"
//           element={isLogin ? <DetailPage/> : <LoginPage/>}
//         />
  
//       </Routes>
 
//   );
// };

// export default Router;

import DetailPage from 'pages/DetailPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
import FormPage from 'pages/FormPage';
 import { Routes, Route } from 'react-router-dom';

 const Router = () => {
   return (
     <Routes>
       <Route path="/" element={<LoginPage />} />
       <Route path="/main" element={<MainPage />} />
       <Route path="/signup" element={<SignupPage />} />
       <Route path="/detail/:id" element={<DetailPage />} />
       <Route path="/detail" element={<DetailPage />} />
       <Route path="/write" element={<FormPage />} />
     </Routes>
   );
 };
 export default Router;