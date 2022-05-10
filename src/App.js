import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from './views/Header'
import NavBar from './views/NavBar';
import Table from './views/Table';
import Home from './views/Home';
import Node from './views/Node';
import ComputerLogin from './views/ComputerLogin';
import MonitorPage from './views/MonitorPage';
import React from 'react';

function App() {
  const history = useHistory();
  React.useEffect(() => {
    fetch(process.env.REACT_APP_URL+"/user/auth", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      }
    }).then(response => {
      if (response.status === 401 && window.location.pathname !== "/login") {
        alert("登陆已失效，请登陆后访问");
        setTimeout(() => { window.location.replace(process.env.REACT_APP_FRONTEND_URL+"/login")} , 200);
      }
    }).catch((error) => {
      alert("连接错误，请稍后重试");
    })
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <div className='w-full h-full block'>
            <ComputerLogin/>
          </div>
          
        </Route>

        <div style={{ height: '100vh', width: '100vw' }} className="flex flex-col overflow-hidden bg-[#EDF5FC] bg-fixed ">
 
          <div className="flex flex-row  h-full w-full">
            <div className="">
              <NavBar />
            </div>
            <div className=" h-full  ">
              <div className="h-20">
                <Header />
              </div>
              <Switch className="">
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
