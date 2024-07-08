import "./style/App.css"
import {Header} from "./components/Header";
import { Article } from "./components/Article";


function App() {
  return (
    <>
      <Header/>
      <section id="article">
        <Article title= "Dicas de JS"/>
        <Article title= "Dicas React"/>
        <Article/>
      </section> 
    </>
  )
}

export default App
