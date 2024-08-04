import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideDrawer from './component/SideDrawer';
import MainPage from './component/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideDrawer />} />
        <Route path="/maths" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
