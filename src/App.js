import "./styles.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
