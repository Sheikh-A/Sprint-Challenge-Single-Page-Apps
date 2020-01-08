import React from "react";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

const Butts = styled.div `
background: black;

`
export default function App() {
  return (
    <Butts>
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList} />
    </main>
    </Butts>
  );
}
