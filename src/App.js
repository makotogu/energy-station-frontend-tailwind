import './App.css';
import Header from './views/Header'
import NavBar from './views/NavBar';

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Header/>
      <div className="container flex flex-row flex-nowrap h-5/6">
        <div className="flex-none sm:w-32 hidden sm:block">
          <NavBar/>
        </div>
        <div className="flex-grow border-2">
          <h1>container</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
