import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);
  const contextValue = {
    isEnglish,
    setIsEnglish
  };
  return (
    <PortfolioContext.Provider value={ contextValue }>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioProvider;
