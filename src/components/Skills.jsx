import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function Skills() {
  const { isEnglish } = useContext(PortfolioContext);

  return (
    <div className="skills-content">
      <h1>
        { isEnglish ? 'Skills' : 'Habilidades' }
      </h1>        
      <section>
        <h2>{ isEnglish ? 'Hard' : 'Técnicas' }</h2>
        <div>
          <a href="https://isocpp.org/std/the-standard" target="blank">
            <img 
            src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++ Card with link to page"
            />
          </a>
          <a href="https://docs.python.org/3/" target="blank">
            <img 
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="Python Card with link to page"
            />
          </a>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript Card with link to page"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HRML5 Card with link to page"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank">
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3 Card with link to page"
            />
          </a>
          <a href="https://reactjs.org/" target="blank">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React Card with link to page"
            />
          </a>
          <a href="https://redux.js.org/" target="blank">
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux Card with link to page"
            />
          </a>
        </div>
        <div>
          <a href="https://dev.mysql.com/doc/" target="blank">
            <img 
              src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL Card with link to page"
            />
          </a>
          <a href="https://docs.docker.com/" target="blank">
            <img 
              src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker Card with link to page"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
