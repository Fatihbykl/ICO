import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ICO from './components/ICO';
import Staking from './components/Staking';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ICO />} />
      <Route path='staking' element={<Staking />} />
    </Routes>
  );
}

export default App;
