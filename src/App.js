import './App.css';
import Router from './Routes/Router/Router';
import 'flowbite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



function App() {

  // const [bodymouseMove, setbodyMouseMove] = useState({
  //   x: 0,
  //   y: 0
  // })

  // useEffect(() => {

  //   const mouseMove = (e) => {
  //     setbodyMouseMove({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener('mousemove', mouseMove)

  //   return () => { 
  //     window.removeEventListener('mousemove', mouseMove)
  //   }

  // }, [])

  


  // const varients = {
  //   default:{
  //     x: bodymouseMove.x -15,
  //     y: bodymouseMove.y -15
  //   }
  // }

  return (
    <div className="App max-w-screen-2xl mx-auto bg-[#00092C] text-white">
      <Router></Router>
      <ToastContainer />
    </div>
  );
}

export default App;
