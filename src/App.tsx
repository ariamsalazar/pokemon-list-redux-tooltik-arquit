import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "./ui/pages/PokemonListPage";
import { PokemonDetailPage } from "./ui/pages/PokemonDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
