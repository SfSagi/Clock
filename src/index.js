import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));


function Clock(props){
  return (
 <div className='box'>
 <p className='pcolor'>Digital Clock</p>
 <h1 className='h1color'>{props.date.toLocaleTimeString()}  </h1>
 </div>
  )
}
 function Timer(){
   root.render(<Clock date={new Date()}/>)
 }
 setInterval(Timer,1000)
// reportWebVitals();
