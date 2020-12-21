<template>
  <div>
    <h1>Pokemon Calculator</h1>
    <SearchBar />
    <img src="https://img.pokemondb.net/sprites/black-white/normal/chandelure.png" alt="Chandelure_Sprite">
    <PokemonTyping />
    <TypeDefenses />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import PokemonTyping from './components/PokemonTyping';
import TypeDefenses from './components/TypeDefenses';
export default {
  name: 'App',
  components: {
    SearchBar,
    PokemonTyping,
    TypeDefenses,
  }
}
</script>

<style scoped>
  div {
    margin: auto;
    text-align: center;
    background-color: rgb(255, 255, 255);
    width: 50%;
    padding-bottom: 10px;
  }
  h1 {
    padding-top: 10px;
    margin-top: 150px;
  }
  img {
    padding-top: 50px;
    padding-bottom: 50px;
    transform:scale(2);
  }
</style>