import type { IPokemonListResponse } from "../../domain/entities/IPokemon";
import type { IPokemonRepository } from "../../domain/ports/IPokemonRepository";

export class GetPokemonListUseCase {
  constructor(private repository: IPokemonRepository) {}
  async execute(limit: number, offset: number): Promise<IPokemonListResponse> {
    return this.repository.getListPokemon(limit, offset);
  }
}
