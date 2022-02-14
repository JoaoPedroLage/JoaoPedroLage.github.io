import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { Link } from "react-scroll";
import { Link as LinkPage } from "react-router-dom";
import translate from "../images/translate.png";

function Header() {
  const { isEnglish, setIsEnglish } = useContext(PortfolioContext);

  return (
    <header>
      <div className="nav-language-buttons">
          <img src={ translate } alt="translate change" />
          <div className="nav-buttons">
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
        <div className="nav-lateral-menu">
            <button className="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
              <img src="https://www.computech123.net/menu_btn.png" alt="hamburger menu" className="hamburger"/>
            </button>
            <ul className="nav-links">
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