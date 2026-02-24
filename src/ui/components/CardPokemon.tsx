import type { IPokemonSummary } from "../../domain/entities/IPokemon";

interface PokemonCardProps {
  pokemon: IPokemonSummary;
  onClick: (name: string) => void;
}

export const CardPokemon = ({ pokemon, onClick }: PokemonCardProps) => {
  return (
    <div
      onClick={() => onClick(pokemon.name)}
      className="border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg
  hover:bg-gray-50"
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-18 h-18 mx-auto"
      />
      <p className="capitalize font-medium">{pokemon.name}</p>
      <p className="text-gray-400 text-sm">#{pokemon.id}</p>
    </div>
  );
};
