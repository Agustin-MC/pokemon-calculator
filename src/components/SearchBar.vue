<template>
  <div>
    <form @submit="searchPokemon">
      <input
        type="text"
        v-model="pokemonName"
        name="pokemon"
        placeholder="Search Your Favorite Pokemon!"
        class="search"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchBar",
  data() {
    return {
      pokemonName: "",
    };
  },
  methods: {
    searchPokemon(e) {
      e.preventDefault();
      const requestPokemon = async () => {
        try {
          const resp = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
          );
          const pokemonData = resp.data;
          this.$emit("pokemon-search", pokemonData);
        } catch (err) {
          console.error(err);
        }
      };
      requestPokemon();
    },
  },
};
</script>

<style scoped>
.search {
  width: 200px;
  height: 30px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  background-color: rgb(221, 221, 221);
  border-radius: 5px 0px 0px 5px;
}

.btn {
  width: 100px;
  height: 30px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  background-color: rgb(167, 167, 167);
  border-radius: 0px 5px 5px 0px;
}
</style>
