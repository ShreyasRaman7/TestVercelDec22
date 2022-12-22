import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar';
import SoccerTransfers from './SoccerTransfers';
import CommentsSection from './CommentsSection';
import SoccerHighlights from './SoccerHighlights';
import xg from "./LiveSoccerGameStates";
import LiveSoccerGameStates from './LiveSoccerGameStates';
import NFLSchedule from './NFLSchedule';
import ToDoList from './ToDoList';
import WeatherComponent from './WeatherComponent';
import ChatApp from './ChatApp';
import TicTacToe from './TicTacToe';
import HomePage from './HomePage';
import background1 from "./background1.jpg";
import WeightedGradeCalculator from './WeightedGradeCalculator';
import PolynomialGraph from './PolynomialGraph';
import { HashRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  

  return (
    <div  className={darkMode ? 'dark-mode' : 'light-mode'}>
    <div className="App"  >
      <ResponsiveAppBar/>
      <header className={`App-header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <BrowserRouter >
      <Routes>
         
        <Route  path="/SoccerHighlights" element={<SoccerHighlights />} />
        <Route path="/comments" element={<CommentsSection />} />
        <Route path="/xg" element={<LiveSoccerGameStates />} />
        <Route  path="/nfl" element={<NFLSchedule />} />
        <Route path="/soccerTransfers" element={<SoccerTransfers />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Weather" element={<WeatherComponent />} />
        <Route path="/ChatApp" element={<ChatApp />} />
        <Route path="/Tictactoe" element={<TicTacToe />} />
        <Route path="/gradeCalculator" element={<WeightedGradeCalculator />} />
        <Route path="/graph" element={<PolynomialGraph />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
      </header>
    </div>
    </div>
  );
}

export default App;


