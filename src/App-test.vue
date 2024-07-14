<script>
</script>
<template>
  <div style="height: 20px; background-color: bisque;"></div>
  <div class="app-container">
    <div class="aside"></div>
    <div class="main"></div>
    <div class="icon"></div>
  </div>
</template>

<style>
.app-container {
  height: 100%;
  background-color: rgb(27, 64, 97);
  margin-top: 0px;
  width: 500px;
  position: relative;
  overflow: hidden;
}

.aside {
  margin-top: -100px;

  height: 100%;
  background-color: aliceblue;
}

.main {
  height: 100%;
  background-color: burlywood;
}

.icon {
  width: 20px;
  height: 20px;
  background-color: coral;
  position: absolute;
  top: 80%;
  left: 80%;
}
</style>
