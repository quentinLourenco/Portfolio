import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
