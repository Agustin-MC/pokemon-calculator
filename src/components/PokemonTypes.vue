<template>
  <div>
    <h2>Types</h2>
    <ul id="example-1">
      <li v-for="types in pokemonTypes" :key="types.name">
        <h2>{{ types.type.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokemonTypes"],
  name: "PokemonTypes",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 25px;
  background-color: rgb(168, 168, 168);
  border-radius: 5px;
}
</style>
