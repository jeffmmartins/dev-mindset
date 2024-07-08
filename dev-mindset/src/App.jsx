import "./style/App.css"
import {Header} from "./components/Header";
import { Article } from "./components/Article";


function App() {
  return (
    <>
      <Header/>
      <section id="article">
        <Article/>
      </section> 
    </>
  )
}

export default App
