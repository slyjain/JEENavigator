import React from 'react'
import Acordian from './Acordian'
import ProgressBar from "@ramonak/react-progress-bar";
const MainPage = () => {
    const [progress, setProgress] = React.useState(0);
  return (
   <>
   <div className="heading">Straight Lines<ProgressBar completed={progress} /></div>
   <div className="description">By doing this course you will become expert at straight lines</div>
   <Acordian setProgress={setProgress}/>
   </>
  )
}

export default MainPage