import axios from "axios";

const state = {
  pokemonData: [],
};

const getters = {
  allPokemonData: (state) => state.pokemonData,
};

const actions = {
  async fetchPokemonData({ commit }) {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
    );
    commit("setPokemonData", response.data);
  },
};

const mutations = {
  setPokemonData: (state, pokemonData) =>
    (state.pokemonData = pokemonData.results),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
