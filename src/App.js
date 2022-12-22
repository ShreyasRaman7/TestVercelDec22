import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Tester from "./Tester";
import { HashRouter, Route, Routes,Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import ResponsiveAppBar from './ResponsiveAppBar';
import NFLSchedule from './NFLSchedule';

function App() {

  return (
     <div className="App"  >
      <header className="App-header" >
        <ResponsiveAppBar/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route  path="/nfl" element={<NFLSchedule />} />
        <Route path="tester" element={<Tester />} />
        </Routes>
      
</BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
