import "./style/App.css"
import {Header} from "./components/Header";
import { Article } from "./components/Article";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadnews(){
      const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles')
      const newsData = response.data.results;
      console.log(newsData)
    }
    loadnews()
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
