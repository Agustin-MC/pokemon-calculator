<template>
  <div>
    <form>
      <input
        type="text"
        name="Title"
        placeholder="   Search Pokemon..."
        class="search"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
