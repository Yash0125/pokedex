import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="bookmark" element={<BookmarkPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
