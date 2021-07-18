import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import './Header.css';

// Pas de HeaderComponent parce qu'il n'y a aucun traitement d'information, ce n'est qu'une View très simple
const HeaderView = () => {
  return (
    <div className="header-view">
      <Navbar bg="light">
        <Container>
          <h1>Bookmark Klaxoon</h1>
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderView;
