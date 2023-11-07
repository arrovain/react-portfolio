import React from 'react'
import './bilgim.scss'

const Bilgim = () => {
  return (
    <section id="languages">
    <div class="container">
      <div class="row">
        <h1 class="section__title">
           <span>YAZILIM BİLGİM</span>
        </h1>
        <div class="language__list">
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="Html Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">HTML</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt="CSS Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">CSS</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt="JavaScript Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">JavaScript</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-python.svg"
                alt="Python Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Python</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt="React Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">React</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-bootstrap-logo.svg"
                alt="Bosstrap Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Boostrap</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-tailwind-css-240.png"
                alt="Tailwind Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Tailwind</span>
          </div>

          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="\icons8-redux.svg"
                alt="Redux Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Redux</span>
          </div>

          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-sass.svg"
                alt="Sass Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Sass</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-git.svg"
                alt="Git Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">Git</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="icons8-mysql.svg"
                alt="MySQL Logo"
                class="language__img"
              />
            </figure>
            <span class="language__name">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
      
  )
}

export default Bilgim

