import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Sucess from './FinalScreenComponent/Sucess';
import ListFilms from './ListFilmsComponent/ListFilms';
import Seats from './SeatsComponent/Seats';
import SessionFilm from './SessionComponent/SessionFilm';
import Top from './TopComponent/Top';
import './App.css';

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
