import React, { useContext, useEffect, useState } from "react";
import { CardPokemon, Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";

const BookmarkPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [bookmarkedPokemons, setBookmarkedPokemons] = useState([]);

  useEffect(() => {
    const fetchBookmarkedPokemons = async () => {
      const bookmarkedIds =
        JSON.parse(localStorage.getItem("bookmarkedPokemons")) || [];
      const bookmarkedData = await Promise.all(
        bookmarkedIds.map((id) => getPokemonByID(id))
      );
      setBookmarkedPokemons(bookmarkedData);
      setLoading(false);
    };

    fetchBookmarkedPokemons();
  }, [getPokemonByID]);

  const handleRemoveBookmark = (id) => {
    const updatedPokemons = bookmarkedPokemons.filter(
      (pokemon) => pokemon.id !== id
    );
    const updatedIds = updatedPokemons.map((pokemon) => pokemon.id);
    localStorage.setItem("bookmarkedPokemons", JSON.stringify(updatedIds));
    setBookmarkedPokemons(updatedPokemons);
  };

  return (
    <>
      <main className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <main className="container bookmark-page">
              <h1>Bookmarked Pokemons</h1>
              <div className="card-list-pokemon container-bookmark">
                <div className="bookmark-list">
                  {bookmarkedPokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                      <CardPokemon pokemon={pokemon} />
                      <button
                        className="btn-search"
                        onClick={() => handleRemoveBookmark(pokemon.id)}
                      >
                        Remove from Bookmark
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </>
        )}
      </main>
    </>
  );
};

export default BookmarkPage;
