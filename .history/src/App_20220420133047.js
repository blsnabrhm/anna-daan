import Home from "./pages/home/Home";
import TopBar   from './components/topbar/TopBar';
import Single    from "./pages/single/Single";
import Write    from "./pages/write/Write";
import Settings  from "./pages/settings/Settings";
import Login    from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user =true;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">{user ? <Home/>:<Register />}</Route>
        <Route path="/login">
          {/* {user ? <Home/>:<Login />} */}
          <Login/>
        </Route>
        <Route path="/write">
          {/* {user ? <Write/>:<Register />} */}
        <Write/>
        </Route>
        <Route path="/settings">
          {/* {user ? <Settings/>:<Register />}  */}
        <Settings/>
        </Route>
        <Route path="/post/:postId">
              <Single />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
