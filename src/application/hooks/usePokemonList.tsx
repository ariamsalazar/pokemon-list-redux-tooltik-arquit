import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../infrastructure/store/redux/hooks";
import { fetchPokemonList } from "../../infrastructure/store/redux/PokemonSlice";
import { LIMIT_BY_PAGE } from "../../constant/GeneralConstant";

export const usePokemonList = (page: number) => {
  const dispatch = useAppDispatch();
  const { listPokemon, loading, error } = useAppSelector(
    (state) => state.pokemon,
  );

  useEffect(() => {
    const offset = (page - 1) * LIMIT_BY_PAGE;
    dispatch(fetchPokemonList({ limit: LIMIT_BY_PAGE, offset }));
  }, [dispatch, page]);

  return { listPokemon, loading, error };
};
