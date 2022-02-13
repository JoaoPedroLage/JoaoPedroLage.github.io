import React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import PortifolioProvider from './context/PortfolioProvider';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <PortifolioProvider>
        <App />
      </PortifolioProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
