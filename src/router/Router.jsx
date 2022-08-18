import DetailPage from "pages/DetailPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import SignupPage from "pages/SignupPage";
import FormPage from "pages/FormPage";
import { Routes, Route } from "react-router-dom";

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
