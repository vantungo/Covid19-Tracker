import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import Register from "./components/Register/Register";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  return (
    <>
      <div className="App">{isLoading && <Loading />}</div>
      <Router>
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/signup" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/detail/:country"
            component={CountryDetail}
          />
          <Route exact path="/news" component={News} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
