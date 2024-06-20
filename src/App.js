import React from 'react'
import { ToastContainer } from 'react-toastify'
import Newsdisplay from './component/Newsdisplay'
import { NoteState } from './ContextAPI/NoteState'

const App = () => {
  return (
    <div>
        <NoteState>
        <Newsdisplay/>
        
        </NoteState>
        <ToastContainer/>
      
    </div>
  )
}

export default App
