import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/detail/:country" component={CountryDetail} />
        <PrivateRoute exact path="/news" component={News} />
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
