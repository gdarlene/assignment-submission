
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import Settings from "./pages/Settings";
import Assignments from "./pages/assignment";
import Management from "./pages/class Management";
import Test from "./pages/Test";

function App() {


  return (
    <>
     <Router>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/assignments" element={<Assignments/>}/>
      <Route path="/management" element={<Management/>} />
      <Route path="/test" element={<Test/>} />


     </Routes>
     </Router>

    </>
  )
}

export default App
