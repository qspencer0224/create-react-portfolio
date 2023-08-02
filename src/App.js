import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Contact from './pages/Contact';

const AppContext = createContext;


function App() {

  return (
    <div className="App">
      {/* <AppContext.Provider> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
        
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
