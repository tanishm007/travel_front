import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/login';
import Register from './components/register';
import Protected from './components/Protected';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactUs from './components/contactUs';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path = "/" element = { <Protected Component = {Home} />} />
         
        <Route path = "/login" element = {<Login setLoginUser={setLoginUser} />} /> 
        <Route path="/register" element = {<Register  /> } />

        <Route path="/contactUs" element={<ContactUs />} />
    
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
