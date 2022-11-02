import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
export const GlobalContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
`;

const BuscadorPoke = () => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const handleSubmit = async (e, pokemon) => {
  //   e.preventDefault();
  //   setData(null);
  //   setError(false);
  //   setIsLoading(true);
  //   try {
  //     let selectedPokemon = pokemon.toLowerCase().trim();
  //     const { data } = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
  //     );
  //     setData(data);
  //   } catch (error) {
  //     setError("Pokemon no encontrado");
  //   }
  //   setIsLoading(false);
  // };
  const state = useSelector((state) => state.pokemon);
  return (
    <>
      <GlobalContenedor>
        <Search></Search>
        {state.isLoading && <h2>Cargando</h2>}
        {state.error && <h2> {state.error} </h2>}
        {state.data && <Card {...state.data} />}
      </GlobalContenedor>
    </>
  );
};
export default BuscadorPoke;
