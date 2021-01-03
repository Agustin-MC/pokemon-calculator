<template>
  <div>
    <h1>Pokemon Calculator</h1>
    <div v-for="pokemonData in allPokemonData" :key="pokemonData.id">
      {{ pokemonData.name }}
    </div>
    <SearchBar v-on:pokemon-search="formatPokemonData" />
    <h2>{{ this.pokemonName }}</h2>
    <img src="./assets/pokeBall.png" />
    <PokemonTypes v-bind:pokemon-types="pokemonTypes" />
    <TypeDefenses />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import TypeDefenses from "./components/TypeDefenses";
import PokemonTypes from "./components/PokemonTypes";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    SearchBar,
    TypeDefenses,
    PokemonTypes,
  },
  data() {
    return {
      pokemonData: "",
      pokemonName: "",
      pokemonTypes: [],
    };
  },
  methods: {
    ...mapActions(["fetchPokemonData"]),
    formatPokemonData(pokemonData) {
      this.pokemonName = pokemonData.name;
      this.pokemonTypes = pokemonData.types;
    },
  },
  computed: mapGetters(["allPokemonData"]),
  created() {
    this.fetchPokemonData();
  },
};
</script>

<style scoped>
div {
  margin: auto;
  text-align: center;
  background-color: rgb(255, 255, 255);
  width: 80%;
  padding-bottom: 10px;
}
h1 {
  padding-top: 10px;
  margin-top: 150px;
}
img {
  max-width: 20%;
}
</style>
