import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { Link as LinkPage } from "react-router-dom";
import translate from "../images/translate.png";

export default function Contact() {
  const { isEnglish, setIsEnglish } = useContext(PortfolioContext);

  return (
    <div>
      <header>
        <div className="nav-to-home-contact">
          <div className="nav-language-buttons">
            <img src={ translate } alt="translate change" />
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
          <div className="contact">
            <h1>
            { isEnglish ? 'Contact' : 'Contato' }
            </h1>
            <nav>
                <LinkPage to="/">
                  { isEnglish ? 'Home' : 'Página Principal' }
                </LinkPage>
            </nav>
          </div>
        </div>
      </header>
      <section className="contact-form">
        <form>
          <input type="text" placeholder={ isEnglish ? 'Your Name' : 'Seu nome' } />
          <input type="email" placeholder={ isEnglish ? 'Your e-mail address' : 'Seu endereço de e-mail' } />
          <textarea placeholder={ isEnglish ? 'Your message' : 'Sua mensagem' }></textarea>
          <button onClick={
             (e) => {
              e.preventDefault(); 
              isEnglish ? alert('Thank you for your message!\n We will be in touch in no time.')
              : alert('Obrigado por sua mensagem!\n Nós entraremos em contato em breve.')
                    } 
          }>
            { isEnglish ? 'Send message' : 'Envie sua mensagem'} 
          </button>
        </form>
      </section>
    </div>
  )
}
