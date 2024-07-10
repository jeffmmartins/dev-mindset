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
      console.log(newsData)
    }
    loadnews()
  },[])

  return (
    <>
      <Header/>
      <section id="article">
        {news.map((article) => (
          <Article 
          title= {article.title}
          provider ={article.news_site}
          description ={article.summary}
          thumbmail ={article.image_url}
          />
        ))}
      </section> 
    </>
  )
}

export default App
