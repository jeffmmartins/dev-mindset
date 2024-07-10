
import style from '../Article/article.module.css'

export const Article = (props) => {
  return (
    <div>
      <article id={style.article}>
        <div>
            <img src={props.thumbmail} alt="foto noticias" style={{width: "100px", height: "50px"}}/>
        </div>
        <div id='articleData'>
            <h2>{props.title}</h2>
            <h3>{props.provider}</h3>
            <p>
              {props.description}
            </p>
        </div>
      </article>
    </div>
  )
}


