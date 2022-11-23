import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"
import PokeCard from "../Card/Card";
import Spinner from 'react-bootstrap/Spinner';
import { Row } from "react-bootstrap";

const Home = () => {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchFilter, setSearchFilter] = useState('');


  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false)
  };

  const getPokemon = async (res) => {
    const pokemonsInfo = [];
    for await (const item of res) {
      const result = await axios.get(item.url)
      pokemonsInfo.push(result?.data);
    };
    setPokeData(pokemonsInfo)
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target?.value);
  };

 useEffect(() => {
    pokeFun();
  }, [url]) 

  return loading ?
    <>
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    </>
    :
    (
      <>
        <div id="main-container">
          <div className="d-flex justify-content-center pt-5">
            <div className="title-pokedex">
              Mi PokeDex
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center pt-5">
            <div className="w-25 pb-5">
              <input
                placeholder="Buscar Pokemon"
                onChange={(e) => handleSearch(e)}
                className='w-100'
              />
            </div>
          </div>
          <div>
            <Row xs={1} md={2} lg={3} className="g-0">
              {
                pokeData.map((pokemon) => (
                  <PokeCard pokemon={pokemon}/>
                ))
              }
            </Row>
            <div className="pagination">
              {prevUrl && <button id="left-button" onClick={() => {
                setPokeData([])
                setUrl(prevUrl)
              }}>Anterior</button>}
              {nextUrl && <button id="right-button" onClick={() => {
                setPokeData([])
                setUrl(nextUrl)
              }}>Siguiente</button>}
            </div>
          </div>
        </div>
      </>
    );
}

export default Home
