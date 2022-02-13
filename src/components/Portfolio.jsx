import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function Portfolio() {
  const { isEnglish } = useContext(PortfolioContext);

  return (
    <div className="portfolio-content">
      <h1>
        { isEnglish ? 'Portfolio' : 'Portfólio' }
      </h1>
        <section>
          <p>
            { isEnglish ? 'Page in build' : 'Página em construção' }
          </p>
        </section>
    </div>
    
  )
}
