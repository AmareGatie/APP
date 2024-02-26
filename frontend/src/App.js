
import './App.css';
 // Import the Router from react-router
 import { Route,Routes } from 'react-router';
 
 import Home from './pages/Home';
import Login from './pages/Login';
import AddEmployee from './pages/AddEmployee';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-employee" element={<AddEmployee/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
