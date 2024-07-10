import "./style/App.css"
import {Header} from "./components/Header";
import { Article } from "./components/Article";
import { useEffect, useState } from "react";


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    
  },[])

  return (
    <>
      <Header/>
      <section id="article">
        <Article title= "Dicas de JS"/>
        <Article title= "Dicas React"/>
        <Article title = "Dicas"/>
      </section> 
    </>
  )
}

export default App
