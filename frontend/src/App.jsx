import React, { useEffect,useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import Nav from './component/Navbar/Nav';
import JEEpaper from './component/JEEpaper/JEEpaper';
import Maths from './component/MainPage/Maths';
import Physics from './component/MainPage/Physics';
import Chemistry from './component/MainPage/Chemistry';
import Pyq from './component/MainPage/Pyq';
import Sheets from './component/MainPage/Sheets';

function App() {
  // const [apiData,setApiData]=useState("")
  // useEffect(()=>{
  //   fetch("/api/questions").then(res=>res.json()).then(data=>{
  //     setApiData(data.message);
  //   },[])
  // })
  return (
    <div className="App">
       
       <Nav />
       {/* {apiData} */}
      <Routes>
        
        <Route path="/" element={<JEEpaper/>}/>
        <Route path="/maths" element={<Maths />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/pyq" element={<Pyq />} />
        <Route path="/sheets" element={<Sheets />} />


      </Routes>
    </div>
  );
}

export default App;