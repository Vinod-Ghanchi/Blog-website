import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";
import { useContext } from "react";
import {Context} from './context/Context'

function App() { 
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user ? <Home /> :<Register />}/>
        <Route path="/login" element={user ? <Home /> :<Login />}/>
        <Route path="/write" element={user ? <Write /> :<Register />}/>
        <Route path="/settings" element={user ? <Settings /> :<Register />}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
