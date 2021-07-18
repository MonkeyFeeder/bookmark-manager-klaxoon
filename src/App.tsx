import React from 'react';
import LandingPageContainer from './views/LandingPage/LandingPageContainer';
import HeaderView from './views/Header/HeaderView';

import './assets/bootstrap.min.css';

// J'ai tendance à toujours utiliser return() malgré qu'il y ait une alternative plus courte, mais par habitude et par lisibilité je préfère utilise return()

const App = () => {
  return (
    <>
      <HeaderView />
      <LandingPageContainer />
    </>
  )
}

export default App;
