import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  return (<PokemonContext.Provider value={{}}></PokemonContext.Provider>
  );
};
