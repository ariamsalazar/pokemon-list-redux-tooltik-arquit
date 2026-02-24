export interface IPokemonStat {
  name: string;
  value: number;
}

export interface IPokemonType {
  name: string;
}

export interface IPokemon {
  id: number
  name: string
  image: string       
  height: number
  weight: number
  baseExperience: number
  types: IPokemonType[]
  stats: IPokemonStat[]
  abilities: string[] 
}

export interface IPokemonSummary {
  id: number
  name: string
  image: string
}

export interface IPokemonListResponse {
  count: number
  results: IPokemonSummary[]
}