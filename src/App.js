import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Tester from "./Tester";
import { HashRouter, Route, Routes,Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

function App() {

  return (
     <div className="App"  >
      <header className="App-header" >
      <NavBar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="tester" element={<Tester />} />
        </Routes>
      
</BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
