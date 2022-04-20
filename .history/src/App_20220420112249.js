import Home from "./pages/home/Home";
import TopBar   from './components/topbar/TopBar';
import Single    from "./pages/single/Single";
import Write    from "./pages/write/Write";
import Settings  from "./pages/settings/Settings";
import Login    from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route path="/">
              <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
