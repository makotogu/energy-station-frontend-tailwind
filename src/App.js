import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './views/Header'
import NavBar from './views/NavBar';
import Login from './views/Login';
import Home from './views/Home';
import Setting from './views/Setting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <div style={{ height: '100vh' ,width: '100vw' }} className="flex flex-col">
          <Header />
          <div className="flex flex-row space-x-4 flex-nowrap h-5/6 w-full">
            <div className="hidden sm:block border-r-2">
              <NavBar />
            </div>
            <div className="w-11/12 ml-1 border-2 ">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/setting">
                  <Setting />
                </Route>
              </Switch>

            </div>
          </div>
        </div>
      </Switch>

    </Router>

  );
}

export default App;
