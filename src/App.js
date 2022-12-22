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
import { createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HomePage from './HomePage';
import background1 from "./background1.jpg";
import WeightedGradeCalculator from './WeightedGradeCalculator';
import PolynomialGraph from './PolynomialGraph';
import { HashRouter } from 'react-router-dom';



function App() {
  return (
    
    <div className="App"  >
      <ResponsiveAppBar/>
      <header className="App-header">
      
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
  );
}

export default App;
