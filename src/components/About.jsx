import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function About() {
  const { isEnglish } = useContext(PortfolioContext);

  return (
    <div className="about-content">
      <h1>
        { isEnglish ? 'About Me' : 'Sobre Mim' }
      </h1>
      <section>
        
          { isEnglish ?
            <p>
              Hello, I'm starting my career as a Front-end developer. I am looking for work in this area.<br/>
              My current goal is to graduate as a Full-Stack developer.<br/>
              I recently completed the Front-end module of my training at Trybe (School of Web Development).<br/>
              With the knowledge I acquired during my training, I am confident enough to work.
            </p>            
            :
            <p>
              Olá, estou começando minha carreira como desenvolvedor Front-end. Estou em busca de trabalho nesssa área.<br/>
              Meu atual objetivo é me formar como um desenvolvedor Full-Stack.<br/>
              Há pouco tempo conclui o módulo de Front-end da minha formação na Trybe (Escola de Desenvolvimento Web).<br/>
              Com os conhecimentos que adquiri ao longo da minha formação, estou confiante o suficiente para trabalhar na área.
            </p>
          }
      </section>
    </div>
  );
}
