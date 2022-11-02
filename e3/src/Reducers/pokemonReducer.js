import { ERROR, SUCCESS, IS_FETCHING } from "../types/index";

// Setear el estado inicial
export const initialState = {
  data: "",
  isLoading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        isLoading: true,
        data: null,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: "No se encontro el poke buscado",
      };
    default:
      return state;
  }
};
