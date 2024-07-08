import imgData from '../../assets/img/logo.png'
import style from '../Article/article.module.css'

export const Article = () => {
  return (
    <div>
      <article id={style.article}>
        <div>
            <img src={imgData} alt="foto noticias" style={{width: "100px", height: "50px"}}/>
        </div>
        <div id='articleData'>
            <h2>Subtitulo</h2>
            <h3>Texto</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
        </div>
      </article>
    </div>
  )
}


