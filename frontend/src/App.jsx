import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './component/MainPage/MainPage';
import Nav from './component/Navbar/Nav';
import JEEpaper from './component/JEEpaper/JEEpaper';

function App() {
  return (
    <div className="App">
       
       <Nav />
      <Routes>
        <Route path="/" element={<JEEpaper/>}/>
        <Route path="/maths" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
