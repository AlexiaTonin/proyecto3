import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"
import PokeCard from "../Card/Card";

const Home = () => {

  const [pokeData,setPokeData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl,setNextUrl]=useState();
  const [prevUrl,setPrevUrl]=useState();
  const [searchFilter, setSearchFilter] = useState('');


  const pokeFun = async() => {
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
  };

  const getPokemon = async(res) => {
    res.map(async(item) => {
        const result = await axios.get(item.url)
        setPokeData(state => {
            state=[...state,result.data]
            state.sort((a,b) => a.id > b.id? 1:-1)
            return state;
        });
    });
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target?.value);
  };

  useEffect (() => {
    pokeFun();
  }, [url, searchFilter])
  
  return (
    <>
    <div id="main-container">
      <div className="d-flex justify-content-center pt-5">
        <div className="w-25 pb-5">
          <input
            placeholder="Buscar Pokemon"
            onChange={(e) => handleSearch(e)}
            className='w-100'
            />
        </div>
      </div>
      <div>
        <PokeCard pokemon={pokeData} loading={loading}/>
        <div className="pagination">
          {  prevUrl && <button id="left-button" onClick={() => {
            setPokeData([])
            setUrl(prevUrl) 
          }}>Anterior</button>}

          { nextUrl && <button id="right-button" onClick={() => {
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
