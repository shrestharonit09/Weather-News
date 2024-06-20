import React,{useState,createContext} from 'react'

const globalContext=createContext();

const NoteState = (props) => {
  
    const[catagory,setCategory]=useState("business")
    const[image,setImage]=useState("https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg")
    const[isHome,setIsHome] = useState(true);
    const[headline,setHeadline]=useState("Headline News");

    const handleheadline=(head)=>{
      setHeadline(head)
    }

    const handlehome=(home)=>{
      setIsHome(home)
    }
    const handleCatagory=(catagory)=>{
    setCategory(catagory)
    }
    const handleImage=(image)=>{
      setImage(image)
    } 
    
  
  return (
    <div>
        <globalContext.Provider value={{catagory,handleCatagory,image,handleImage,isHome,handlehome,headline,handleheadline}}>
            {props.children}
        </globalContext.Provider>

    </div>
  )
}

export {NoteState,globalContext}