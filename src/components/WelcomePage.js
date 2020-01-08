import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Heck = styled.div`
display: flex; 
justify-content: center;
background: rgb(252,50,0);
background: radial-gradient(circle, rgba(252,50,0,1) 14%, rgba(205,63,251,1) 96%);
`

export default function WelcomePage() {
  return (
    <Heck>
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to='/characters'>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Link>
      </header>
    </section>
    </Heck>
  );
}
