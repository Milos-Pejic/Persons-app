import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/Home'

import Add from './components/Add';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route  exact path="/" element={<Home/>}/>
          <Route exact path="/persons/add" element={<Add/>}/>
          <Route exact path="/persons/edit/:id" element={<EditUser/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
