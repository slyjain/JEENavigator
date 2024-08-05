import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideDrawer from './component/SideDrawer';
import MainPage from './component/MainPage/MainPage';
import Nav from './component/Navbar/Nav';

function App() {
  return (
    <div className="App">
       
       <Nav />
      <Routes>
        {/* <Route path="/" element={<SideDrawer />} /> */}
        <Route path="/maths" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
