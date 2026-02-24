import type { IPokemonListResponse, IPokemon } from '../entities/IPokemon';

export interface IPokemonRepository {
    getListPokemon(limit: number, offset: number): Promise<IPokemonListResponse>
    getPokemonByName(name: string): Promise<IPokemon>
    getPokemonById(id: number): Promise<IPokemon>
}