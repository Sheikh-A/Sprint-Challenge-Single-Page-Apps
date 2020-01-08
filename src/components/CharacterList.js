import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setCharList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {
        console.log(response.data)
        setCharList(response.data.results)
      })
      .catch( err => {
        console.log(err);
      })
    }, []);
    
    const handleSearch = (event) => {
      console.log(event.target.value)
      setSearch(event.target.value)
      
      setCharList(list.filter( char => char.name.toLowerCase().includes(search.toLocaleLowerCase()) ))
    }

  return (
    <div>
      <div>
        <SearchForm handleSearch={handleSearch} search={search}/>
      </div>
      <section className="character-list grid-view">
        {list.map( character => (
          <div key={character.id} className="page-view">
            <CharacterCard character={character} />
          </div>
        ))}
      </section>
    </div> 
  );
}
