import Vue from "vue";
import Vuex from "vuex";
import pokemonData from "./modules/pokemonData";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    pokemonData,
  },
});
