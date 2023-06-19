import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { firstCapital } from "../helper/helper";

const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [bookmarked, setBookmarked] = useState(false);

  const { id } = useParams();
  const handleBookMark = () => {
    setBookmarked((prevBookmarked) => !prevBookmarked);
    console.log("bookmarked");
  };


  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  useEffect(() => {
    const bookmarkedPokemons =
      JSON.parse(localStorage.getItem("bookmarkedPokemons")) || [];
    const isBookmarked = bookmarkedPokemons.includes(id);
    setBookmarked(isBookmarked);
  }, [id]);

  useEffect(() => {
    const bookmarkedPokemons =
      JSON.parse(localStorage.getItem("bookmarkedPokemons")) || [];
    if (bookmarked) {
      bookmarkedPokemons.push(id);
    } else {
      const index = bookmarkedPokemons.indexOf(id);
      if (index !== -1) {
        bookmarkedPokemons.splice(index, 1);
      }
    }
    localStorage.setItem(
      "bookmarkedPokemons",
      JSON.stringify(bookmarkedPokemons)
    );
  }, [id, bookmarked]);


  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
          <button className="btn-search" onClick={handleBookMark}>
              {bookmarked ? "Remove from Bookmark" : "Add to Bookmark"}
            </button>
            <span className="number-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1>{firstCapital(pokemon.name)}</h1>
              <div className="card-types info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>height</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p>Weight</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1>Statistics</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
