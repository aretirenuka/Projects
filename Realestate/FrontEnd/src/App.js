import { useState } from "react"
import "./App.css"
import Pages from "./components/pages/Pages"
import AppContext from './components/AppContext';

function App() {
  const [id,getid]=useState('')
  const userSettings = {
    id : id,
    getid
  }
  return(
  <AppContext.Provider value={userSettings}>

 
   <Pages />
   </AppContext.Provider>
   )
  
}

export default App
