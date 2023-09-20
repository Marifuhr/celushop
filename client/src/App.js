import './App.css';
import Landing from './LandingPage/LandingPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Detail from './Detail/Detail';



export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail:id" element={<Detail />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}


