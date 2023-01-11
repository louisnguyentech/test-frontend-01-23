import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./pages/auth";
import AppPage from "./pages/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss"
import 'react-circular-progressbar/dist/styles.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Route path="/" component={AppPage} />
      </Switch>
    </div>
  );
}

export default App;
