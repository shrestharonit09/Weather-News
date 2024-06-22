import React from 'react'
import { ToastContainer } from 'react-toastify'
import Newsdisplay from './component/Newsdisplay'
import { NoteState } from './ContextAPI/NoteState'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from './component/Contactme'

const App = () => {
  return (
    <div>
        <NoteState>
      
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={ <Newsdisplay/>}/>
          <Route path="/weather" element={<p>Weather</p>} />
          <Route path="/contact" element={<ContactMe/>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="*" element={<p>page not found</p>} />
     
      </Routes>
      </BrowserRouter>
        
        </NoteState>
        <ToastContainer/>
      
    </div>
  )
}

export default App
