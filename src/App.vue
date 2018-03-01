<template>
  <div id="app">

    <SideBar />

    <Board />

  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import Board from './components/Board.vue'
import Tile from './components/Tile.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    Board,
    Tile
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
