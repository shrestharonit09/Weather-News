import React,{useState,createContext} from 'react'

const globalContext=createContext();

const NoteState = (props) => {
  
    const[catagory,setCategory]=useState("business")
    console.log("catagory" , catagory);

    const handleCatagory=(catagory)=>{
    setCategory(catagory)
    }



    
  return (
    <div>
        <globalContext.Provider value={{catagory,handleCatagory}}>
            {props.children}
        </globalContext.Provider>

    </div>
  )
}

export {NoteState,globalContext}