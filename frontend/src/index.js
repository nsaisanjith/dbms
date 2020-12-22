import React from "react";
import ReactDOM from "react-dom";
import Mainpage from "./components/Mainpage";
import CustomerForm from "./components/CustomerForm";
import Conformation from "./components/Conformation";
import SignIn from "./components/SignIn";
import AdminPage from "./components/AdminPage";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
const Index = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Mainpage} />
        <Route path="/customer" exact={true} component={CustomerForm} />
        <Route path="/conformation" exact={true} component={Conformation} />
        <Route path="/signIn" exact={true} component={SignIn} />
        <Route path="/AdminPage" exact={true} component={AdminPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(Index, document.getElementById("root"));
