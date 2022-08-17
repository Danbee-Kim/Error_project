import DetailPage from "pages/DetailPage";
import FormPage from "pages/FormPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import SignupPage from "pages/SignupPage";
import { Routes, Route, Switch } from "react-router-dom";
import PublicRoute from "PublicRoute";
import PrivateRoute from "PrivateRoute";

const Router = () => {
  return (
    <switch>
      <PublicRoute restricted={false} path="/" component={LoginPage} exact/>
      <PublicRoute  restricted={false} path="/signup" component={SignupPage} exact />
      <PrivateRoute restricted={true} path="/main" component={MainPage} exact  />
      <PrivateRoute restricted={true} path="/write" component={FormPage } exact />
      <PrivateRoute restricted={true} path="/detail" component={DetailPage} exact />
      <PrivateRoute restricted={true}  path="/detail/:id" component={DetailPage} exact  />
    </switch>
  );
};
export default Router;
