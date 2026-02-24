import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetPokemonDetailUseCase,
  GetPokemonDetailUseCaseById,
} from "../../../application/useCases/GetPokemonDetailUseCase";
import { GetPokemonListUseCase } from "../../../application/useCases/GetPokemonListUseCase";
import type {
  IPokemonListResponse,
  IPokemon,
} from "../../../domain/entities/IPokemon";
import { PokemonRepository } from "../../adapters/PokemonRepository";
import {
  FETCH_DETAIL_POKEMON,
  FETCH_DETAIL_POKEMON_BY_ID,
  FETCH_LIST_POKEMON,
} from "../../../constant/ReduxConstant";

interface PokemonState {
  listPokemon: IPokemonListResponse | null;
  selectedPokemon: IPokemon | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  listPokemon: null,
  selectedPokemon: null,
  loading: false,
  error: null,
};

const repository = new PokemonRepository();
const getPokemonListUCase = new GetPokemonListUseCase(repository);
const getPokemonDetailUCase = new GetPokemonDetailUseCase(repository);
const getPokemonDetailByIdUCase = new GetPokemonDetailUseCaseById(repository);

export const fetchPokemonList = createAsyncThunk(
  FETCH_LIST_POKEMON,
  async ({ limit, offset }: { limit: number; offset: number }) => {
    return await getPokemonListUCase.execute(limit, offset);
  },
);

export const fetchPokemonDetail = createAsyncThunk(
  FETCH_DETAIL_POKEMON,
  async (name: string) => {
    return await getPokemonDetailUCase.execute(name);
  },
);

export const fetchPokemonDetailById = createAsyncThunk(
  FETCH_DETAIL_POKEMON_BY_ID,
  async (id: number) => {
    return await getPokemonDetailByIdUCase.execute(id);
  },
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    clearSelectedPokemon(state) {
      state.selectedPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchPokemonList
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.listPokemon = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching list";
      })
      // fetchPokemonDetail
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPokemon = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching detail";
      })
      // fetchPokemonDetailById
      .addCase(fetchPokemonDetailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetailById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPokemon = action.payload;
      })
      .addCase(fetchPokemonDetailById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching detail";
      });
  },
});

export const { clearSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
