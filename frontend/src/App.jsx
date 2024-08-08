import React, { useEffect,useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './component/MainPage/MainPage';
import Nav from './component/Navbar/Nav';
import JEEpaper from './component/JEEpaper/JEEpaper';

function App() {
  const [apiData,setApiData]=useState("")
  useEffect(()=>{
    fetch("http://localhost:3000/get",{
      method=""
    }).then(res=>res.json()).then(data=>{
      setApiData(data.message);
    },[])
  })
  return (
    <div className="App">
       
       <Nav />
       {apiData}
      <Routes>
        
        <Route path="/" element={<JEEpaper/>}/>
        <Route path="/maths" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
