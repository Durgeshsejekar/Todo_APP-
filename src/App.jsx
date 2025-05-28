import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { TodoProvider } from './context/todoContext'
import { ToastContainer, toast } from 'react-toastify';
import ThemeContext from './context/ThemeContext';

const App = () => {

  const {dark} = useContext(ThemeContext)

  


  return (

    <TodoProvider>
    <div className={dark? 'min-h-screen bg-gray-800 px-5 duration-200' : 'min-h-screen bg-gray-300 px-5 duration-200'}>  
      <Container/>  
    </div>
    <ToastContainer />
    </TodoProvider>
    
      

  )
}

export default App
