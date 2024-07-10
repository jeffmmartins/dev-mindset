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
      setNews(newsData)
    }
    loadnews()
  },[])

  return (
    <>
      <Header/>
      <section id="article">
        {news.map(() => {(
          <Article title= "Dicas de JS"/>
        )})}
      </section> 
    </>
  )
}

export default App
