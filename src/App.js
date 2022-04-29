import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './views/Header'
import NavBar from './views/NavBar';
import Table from './views/Table';
import Home from './views/Home';
import Node from './views/Node';
import ComputerLogin from './views/ComputerLogin';
import MonitorPage from './views/MonitorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <div className='w-full h-full hidden sm:block'>
            <ComputerLogin/>
          </div>
          
        </Route>

        <div style={{ height: '100vh', width: '100vw' }} className="flex flex-col bg-gray-100 dark:bg-black dark:bg-opacity-75">
          <div className="">
            <Header />
          </div>
          <div className="flex flex-row space-x-4 flex-nowrap h-full w-full">
            <div className="">
              <NavBar />
            </div>
            <div className="w-11/12 h-full ml-1">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/table">
                  <Table />
                </Route>
                <Route exact path="/monitor">
                  <MonitorPage />
                </Route>
                <Route exact path="/node">
                  <Node />
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
