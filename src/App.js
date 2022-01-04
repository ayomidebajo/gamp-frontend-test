import "./styles.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { checkTokenValidity } from "./actions/actions";
import { store } from "./store";

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(checkTokenValidity(token));
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
