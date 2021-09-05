import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Sucess from './Components/FinalScreenComponent/Sucess';
import ListFilms from './Components/ListFilmsComponent/ListFilms';
import Seats from './Components/SeatsComponent/Seats';
import SessionFilm from './Components/SessionComponent/SessionFilm';
import Top from './Components/TopComponent/Top';

function App() {
  const [seatSelecteds, setSeatSelecteds] = useState([]);
  const [clientInfo, setClientInfo] = useState(null);

  return (
    <Router>
      <Top/>
      <Switch>
        <Route path="/" exact>
          <ListFilms/>
        </Route>
        <Route path="/Session/:idFilm" exact>
          <SessionFilm/>
        </Route>
        <Route path="/Seats/:idSession" exact>
          <Seats 
            seatSelecteds={seatSelecteds}
            setSeatSelecteds={setSeatSelecteds}
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
          />
        </Route>
        <Route path="/Sucess" exact>
          <Sucess
            seatSelecteds={seatSelecteds}
            setSeatSelecteds={setSeatSelecteds}
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
          />    
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
