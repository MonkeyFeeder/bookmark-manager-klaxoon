import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPageContainer from "./views/LandingPage/LandingPageContainer";
import HeaderView from "./views/Header/HeaderView";

import "./assets/bootstrap.min.css";
import MediaEditContainer from "./views/MediaEdit/MediaEditContainer";
import { MediaInterface } from "./constants/interfaces/Media";

// J'ai tendance à toujours utiliser return() malgré qu'il y ait une alternative plus courte, mais par habitude et par lisibilité je préfère utilise return()
// Pour un projet plus conséquent j'aurais mis la gestion des routes dans un fichier routes.tsx, mais ici pour 2 routes et en étant quasiment sûr de n'avoir aucun traitement d'info dans ce fichier,
// j'ai préféré tout mettre ici
// La MediaList se trouve ici, et je n'utilise pas Context, Mobx ou Redux car encore une fois, pour un projet si petit, le prop drilling n'est pas vraiment un problème, et le
// state management n'est pas difficile

const App = () => {
  const [mediaList, setMediaList] = useState<MediaInterface[]>([]);

  return (
    <Router>
      <HeaderView />
      <Switch>
        <Route exact path="/">
          <LandingPageContainer
            mediaList={mediaList}
            setMediaList={setMediaList}
          />
        </Route>
        <Route exact path="/edit/:id">
          <MediaEditContainer
            mediaList={mediaList}
            setMediaList={setMediaList}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
