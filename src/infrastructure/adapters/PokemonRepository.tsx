/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { BASE_URL, POKEMON_IMG, POKEMON_URL } from "../../constant/ApiConstant";
import type {
  IPokemon,
  IPokemonListResponse,
  IPokemonSummary,
} from "../../domain/entities/IPokemon";
import type { IPokemonRepository } from "../../domain/ports/IPokemonRepository";
import { extractIdFromUrl, mapToPokemon } from "../../utils/utils";

export class PokemonRepository implements IPokemonRepository {
  async getListPokemon(
    limit: number,
    offset: number,
  ): Promise<IPokemonListResponse> {
    const { data } = await axios.get(`${BASE_URL}${POKEMON_URL}`, {
      params: { limit, offset },
    });

    const results: IPokemonSummary[] = data.results.map((item: any) => {
      const id = extractIdFromUrl(item.url);
      return {
        id,
        name: item.name,
        image: `${POKEMON_IMG}/${id}.png`,
      };
    });

    return { count: data.count, results };
  }

  async getPokemonByName(name: string): Promise<IPokemon> {
    const { data } = await axios.get(
      `${BASE_URL}${POKEMON_URL}/${name.toLocaleLowerCase()}`,
    );
    const pokemon = mapToPokemon(data);
    return pokemon;
  }

  async getPokemonById(id: number): Promise<IPokemon> {
    const { data } = await axios.get(`${BASE_URL}${POKEMON_URL}/${id}`);
    const pokemon = mapToPokemon(data);
    return pokemon;
  }
}
