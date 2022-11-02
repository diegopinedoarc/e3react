import axios from "axios";
import { SUCCESS, IS_FETCHING, ERROR } from "../types/index";

export const fetchPoke = (e, pokemon) => async (dispatch) => {
  e.preventDefault();
  dispatch({ type: IS_FETCHING });

  try {
    let selectedPokemon = pokemon.toLowerCase().trim();
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
