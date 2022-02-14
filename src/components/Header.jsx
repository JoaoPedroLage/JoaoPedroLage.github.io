import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { Link } from "react-scroll";
import { Link as LinkPage } from "react-router-dom";

function Header() {
  const { isEnglish, setIsEnglish } = useContext(PortfolioContext);

  return (
    <header>
      <div className="nav-language-buttons">
          <button
            className={isEnglish ? 'selected-btn' : ''} 
            onClick={ () => setIsEnglish(true) }
          >
            EN-US
          </button>
          <button
            className={!isEnglish ? 'selected-btn' : ''} 
            onClick={ () => setIsEnglish(false) }
          >
            PT-BR
          </button>
      </div>
      <nav className="nav-header">
        <div className="nav-home">
          <Link 
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
              { isEnglish ? 'Joao Pedro Lage ' : 'João Pedro Lage' }
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                { isEnglish ? 'About Me' : 'Sobre Mim' }
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                { isEnglish ? 'Skills ' : 'Habilidades' }
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to='portfolio'
                spy={true}
                smooth={true}
                duration={500}
              >
                { isEnglish ? 'Portfolio ' : 'Portfólio' }
              </Link>
            </li>
            <li>
              <LinkPage to="/contact">
                { isEnglish ? 'Contact ' : 'Contato' }
              </LinkPage>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;