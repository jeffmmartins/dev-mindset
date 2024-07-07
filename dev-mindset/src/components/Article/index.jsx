import React from 'react'
import imgData from '../../assets/img/logo.png'

export const Article = () => {
  return (
    <div>
      <article id='article'>
        <div>
            <img src={imgData} alt="foto noticias" style={{width: "100px", height: "50px"}}/>
        </div>
        <div id='articleData'>
            <h2>Subtitulo</h2>
            <h3>Texto</h3>
            <p>Conteudo</p>
        </div>
      </article>
    </div>
  )
}


