import axios from "axios";

export const getPokemons = (query) => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    return axios.get(url.concat(query));
};
