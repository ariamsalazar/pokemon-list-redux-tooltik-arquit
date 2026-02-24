import { useParams, useNavigate } from "react-router-dom";
import { usePokemonDetail } from "../../application/hooks/usePokemonDetail";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";

export const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { selectedPokemon, loading, error } = usePokemonDetail(name!);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  if (!selectedPokemon) return null;

  return (
    <div className="max-w-lg mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-2 text-blue-600 hover:text-blue-900 cursor-pointer"
      >
        ← Back
      </button>

      <div className="border border-gray-200 rounded-xl p-6 text-center">
        <img
          src={selectedPokemon.image}
          alt={selectedPokemon.name}
          className="w-36 h-36 mx-auto"
        />
        <h1 className="text-2xl font-bold capitalize mt-1 mb-1">
          {selectedPokemon.name}
        </h1>
        <p className="text-gray-400">#{selectedPokemon.id}</p>
        <div className="flex justify-center gap-2 mt-3">
          {selectedPokemon.types.map((t) => (
            <span
              key={t.name}
              className="px-3 py-1 bg-gray-200 rounded-md text-sm capitalize"
            >
              {t.name}
            </span>
          ))}
        </div>
        <div className="mt-6 text-left">
          <h2 className="font-semibold text-gray-700 mb-3">Stats</h2>
          {selectedPokemon.stats.map((stat) => (
            <div key={stat.name} className="flex items-center gap-4 mb-4">
              <span className="w-32 text-sm capitalize text-gray-500">
                {stat.name}
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${(stat.value / 255) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium w-8">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
