import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';

const AppContext = createContext

function App() {

  
  const getData = async () =>{
    const response = await axios.get('')
    const info = response.data
    console.log(info)
  }

  useEffect(() =>{
    getData();
  }, [])



  return (
    <div className="App">
      <AppContext.Provider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutme' element={<AboutMe />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
