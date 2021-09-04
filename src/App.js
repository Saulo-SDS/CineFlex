import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import FinalScreen from './Components/FinalScreenComponent/FinalScreen';
import ListFilms from './Components/ListFilmsComponent/ListFilms';
import Seats from './Components/SeatsComponent/Seats';
import SessionFilm from './Components/SessionComponent/SessionFilm';
import Top from './Components/TopComponent/Top';

function App() {
  return (
    <Router>
      <Top/>
      <Switch>
        <Route path="/" exact>
          <ListFilms/>
        </Route>
        <Route path="/Session" exact>
          <SessionFilm/>
        </Route>
        <Route path="/Seats" exact>
          <Seats/>
        </Route>
        <Route path="Final-Screen" exact>
          <FinalScreen/>    
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
