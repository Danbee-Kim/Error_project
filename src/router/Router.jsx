import DetailPage from 'pages/DetailPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';
 import { Routes, Route } from 'react-router-dom';

 const Router = () => {
   return (
     <Routes>
       <Route path="/" element={<MainPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignupPage />} />
       <Route path="/detail/:id" element={<DetailPage />} />
     </Routes>
   );
 };
 export default Router;