/*
  import React from "react";
  import Macaron from "./Macaron";
  import cakes from "./cakes.json";

  function App() {// 부모컴포넌트
    return (
      <>
        <div className="app">안녕하세요!</div>
        {cakes.map(cake => (
          <Macaron
            propsid = {cake.id}
            propsname = {cake.name}
            propsimage = {cake.image}
          />
        ))}
      </>
    );
  }

  export default App;
*/

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App