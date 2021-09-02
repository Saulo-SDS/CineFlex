import './App.css';
import ListFilms from './ListFilmsComponent/ListFilms';
import Seats from './SeatsComponent/Seats';
import SessionFilm from './SessionComponent/SessionFilm';
import Top from './TopComponent/Top';

function App() {
  return (
    <>
      <Top/>
      {/*<ListFilms/>*/}
      {/*<SessionFilm/>*/}
      {<Seats/>}
    </>
  );
}

export default App;
