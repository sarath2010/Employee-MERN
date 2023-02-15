import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Empform from './Components/Empform';
import Admin from './Components/Admin';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/user' element={<Dashboard />} />
          <Route path='/empform' element={<Empform />} />
          <Route path='/crud' element={<Admin />} />
          <Route path='/' element={<Login />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
