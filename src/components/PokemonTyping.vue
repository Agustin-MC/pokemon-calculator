<template>
  <div>
    <h2>Typing</h2>
    <ul>
      <li>Ghost</li>
      <li>Fire</li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: "PokemonTyping"
}
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