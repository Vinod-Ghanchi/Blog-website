import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() { 
  const user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> :<Register />}</Route>
        <Route path="/login">{user ? <Home /> :<Login />}</Route>
        <Route path="/write">{user ? <Write /> :<Register />}</Route>
        <Route path="/settings">{user ? <Settings /> :<Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
