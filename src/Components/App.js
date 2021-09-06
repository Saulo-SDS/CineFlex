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
  const [purchaseInfo, setPurchaseInfo] = useState(null);

  return (
    <Router>
      <Top/>
      <Switch>
        <Route path="/" exact component={ListFilms}>
          <ListFilms/>
        </Route>
        <Route path="/Session/:idFilm" exact component={Seats}>
          <SessionFilm/>
        </Route>
        <Route path="/Seats/:idSession" exact component={SessionFilm}>
          <Seats 
            seatSelecteds={seatSelecteds}
            setSeatSelecteds={setSeatSelecteds}
            purchaseInfo={purchaseInfo}
            setPurchaseInfo={setPurchaseInfo}
          />
        </Route>
        <Route path="/Sucess" exact component={Sucess}>
          <Sucess
            seatSelecteds={seatSelecteds}
            setSeatSelecteds={setSeatSelecteds}
            purchaseInfo={purchaseInfo}
            setPurchaseInfo={setPurchaseInfo}
          />    
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
