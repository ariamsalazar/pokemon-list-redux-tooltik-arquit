import type { IPokemon } from "../../domain/entities/IPokemon";
import type { IPokemonRepository } from "../../domain/ports/IPokemonRepository";

export class GetPokemonDetailUseCase {
  constructor(private repository: IPokemonRepository) {}
  async execute(name: string): Promise<IPokemon> {
    return this.repository.getPokemonByName(name);
  }
}

export class GetPokemonDetailUseCaseById {
  constructor(private repository: IPokemonRepository) {}
  async execute(id: number): Promise<IPokemon> {
    return this.repository.getPokemonById(id);
  }
}
