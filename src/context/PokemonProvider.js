import { useForm } from "../hook/useForm";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  // Use CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
// onInputChange, valueSearch, onResetForm
