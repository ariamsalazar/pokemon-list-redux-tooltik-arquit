import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemonList } from "../../application/hooks/usePokemonList";
import { INIT_PAGE } from "../../constant/GeneralConstant";
import { POKEMON_URL } from "../../constant/ApiConstant";
import { ButtonsPagination } from "../components/ButtonsPagination";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { CardPokemon } from "../components/CardPokemon";

export const PokemonListPage = () => {
  const [page, setPage] = useState(INIT_PAGE);
  const navigate = useNavigate();
  const { listPokemon, loading, error } = usePokemonList(page);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 tracking-wide text-gray-700">
        Pokédex <span className="font-light text-blue-700">Explorer</span>
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {listPokemon?.results.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            onClick={(name) => navigate(`${POKEMON_URL}/${name}`)}
          />
        ))}
      </div>
      <ButtonsPagination page={page} onPageChange={setPage} />
    </div>
  );
};
