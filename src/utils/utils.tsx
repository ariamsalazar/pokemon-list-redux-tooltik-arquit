/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IPokemon } from "../domain/entities/IPokemon";

export function extractIdFromUrl(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}

export function mapToPokemon(data: any): IPokemon {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    types: data.types.map((t: any) => ({ name: t.type.name })),
    stats: data.stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    abilities: data.abilities.map((a: any) => a.ability.name),
  };
}
