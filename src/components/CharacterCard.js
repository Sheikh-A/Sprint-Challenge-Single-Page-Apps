import React from "react";
import styled from 'styled-components';

const Container = styled.div`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,0.7567401960784313) 50%, rgba(245,69,0,0.7959558823529411) 100%);
color: white;
display: flex;
`

export default function CharacterCard({ character }) {
  console.log('props', character);
  const { id, name, image } = character;
  return (
    <Container key={id} className="card">
      <h3>{name}</h3>
      <div className='char'>Gender: {character.gender}</div>
      <div className='type'>Species: {character.species}</div>
      <div className='stats'>Status: {character.status}</div>
      <div className='loca'>Location: {character.location.name}</div>
      <img src={image} alt={name}/>
    </Container> 
  )
};
