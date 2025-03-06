import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import Assignments from "./pages/assignment";
import Management from "./pages/class Management";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import Logout from './pages/Logout';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {


  return (
    <>
     <Router>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/assignments" element={<Assignments/>}/>
      <Route path="/management" element={<Management/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>


     </Routes>
     </Router>

    </>
  )
}

export default App
