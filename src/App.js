import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Body from './components/Body';
import PopularFilm from './components/PopularFilm';
import PopularSeries from './components/PopularSeries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div><Navbar/><Body/><PopularFilm/><PopularSeries/></div>
          }
          />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
