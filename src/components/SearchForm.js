import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  input {
    padding: 1rem;
    font-size: 1.2rem;
    outline-color: orange;
    width: 180px;
    margin: 20px 0 40px;
  }
`

export default function SearchForm(props) {
  return (
    <Container>
      <section className="search-form">
      <form>
        <input type="search" name="search" placeholder="search" onChange={props.handleSearch} />
      </form>
      </section>
    </Container> 
  );
}