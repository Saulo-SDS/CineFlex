import './App.css';
import ListFilms from './ListFilmsComponent/ListFilms';
import SessionFilm from './SessionComponent/SessionFilm';
import Top from './TopComponent/Top';

function App() {
  return (
    <>
      <Top/>
      {/*<ListFilms/>*/}
      {<SessionFilm/>}
    </>
  );
}

export default App;
