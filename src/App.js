import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import UserDetail from './pages/User Detail/UserDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/:userId" exact component={UserDetail} />
          <Route path="*">
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
