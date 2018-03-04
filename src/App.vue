<template>
  <div id="app">

    <main>
      <Board />
    </main>

    <SideBar />

  </div>
</template>


<script>
import SideBar from './components/SideBar.vue'
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    Board
  }
}
</script>


<style>
html, body {
  height: 100%;
  margin: 0px;
}

main {
  width: 75%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
}

@media only screen 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {

      main {
        width: 100%;
        height: 70%;
        top: 0;
      }

}
</style>
