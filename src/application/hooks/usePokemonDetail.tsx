import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../infrastructure/store/redux/hooks";
import {
  fetchPokemonDetail,
  clearSelectedPokemon,
  fetchPokemonDetailById,
} from "../../infrastructure/store/redux/PokemonSlice";

export const usePokemonDetail = (name: string) => {
  const dispatch = useAppDispatch();
  const { selectedPokemon, loading, error } = useAppSelector(
    (state) => state.pokemon,
  );

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
    return () => {
      dispatch(clearSelectedPokemon());
    };
  }, [dispatch, name]);

  return { selectedPokemon, loading, error };
};

export const usePokemonDetailById = (id: number) => {
  const dispatch = useAppDispatch();
  const { selectedPokemon, loading, error } = useAppSelector(
    (state) => state.pokemon,
  );

  useEffect(() => {
    dispatch(fetchPokemonDetailById(id));
    return () => {
      dispatch(clearSelectedPokemon());
    };
  }, [dispatch, id]);

  return { selectedPokemon, loading, error };
};
