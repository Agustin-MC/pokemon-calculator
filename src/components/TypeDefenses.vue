<template>
  <div>
    <h2>Type Defenses</h2>
    <div class="grid-container">
      <div class="Weaknesses">
        Weaknesses
        <ul>
          <li>Weakness 1</li>
          <li>Weakness 2</li>
          <li>Weakness 3</li>
        </ul>
      </div>
      <div class="Resistances">
        Resistances
        <ul>
          <li>Resistance 1</li>
          <li>Resistance 2</li>
          <li>Resistance 3</li>
        </ul>
      </div>
      <div class="Immunities">
        Immunities
        <ul>
          <li>Immunity 1</li>
          <li>Immunity 2</li>
          <li>Immunity 3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeDefenses",
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 3px;
}
.grid-container > div {
  text-align: center;
}
.Weaknesses {
  background-color: rgb(148, 70, 70);
  padding-top: 5px;
  border-radius: 5px 0px 0px 5px;
}
.Resistances {
  background-color: rgb(70, 148, 74);
  padding-top: 5px;
}
.Immunities {
  background-color: rgb(126, 126, 126);
  padding-top: 5px;
  border-radius: 0px 5px 5px 0px;
}
ul {
  list-style-type: none;
  padding: 0px;
}
li {
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
