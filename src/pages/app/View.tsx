import Footer from "layouts/footer";
import { Route, Switch } from "react-router-dom";

import Header from "../../layouts/header";
import ColumnPage from "./column";
import MyRecordPage from "./my-record";
import TopPage from "./top-page";

const View = () => {
  return (
    <div className="app-page-wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={TopPage} />
        <Route path="/my-record" component={MyRecordPage} />
        <Route path="/column-page" component={ColumnPage} />
      </Switch>
      <div className="scrool-button">
        <img src="/assets/images/scroll.svg" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default View;
