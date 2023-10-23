import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div><Navbar/><Body/></div>
          }
          />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
