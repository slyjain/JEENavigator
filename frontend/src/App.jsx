import { useState } from 'react'

import './App.css'
import SideDrawer from './component/SideDrawer'
import MainPage from './component/MainPage/MainPage'
function App() {
  

  return (
    <>
      <div className="App">
        <SideDrawer/>
        <MainPage/>
      </div>
    </>
  )
}

export default App
