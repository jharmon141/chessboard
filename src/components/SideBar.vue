<template>
    <div id="side-bar">

        <div v-if="!$store.getters.currentTile">
            <h2>Select a tile</h2>
        </div>

        <div v-else>
            <h2>Current Tile:</h2>
            <h1>{{ currentTile }}</h1>

            <h2>Select History:</h2>
            <p>{{ selectHistory }}</p>
        </div>

    </div>
</template>


<script>
export default {
    name: 'SideBar',
    computed: {
        currentTile() {
            const currentTile = this.$store.getters.currentTile
            return `${currentTile.column}${currentTile.row}`
        },

        selectHistory() {
            const formattedTiles = this.$store.state.selectedTiles.map(tile => `${tile.column}${tile.row}`)
            return formattedTiles.join(', ')
        }
    }

}
</script>


<style scoped>
#side-bar {
  background-color: gainsboro;
  color: #2c3e50;
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
}

h2 {
  margin-top: 50px;
}

p {
  margin: 0px 15px 0px 15px;
}

@media only screen and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  #side-bar {
    bottom: 0;
    top: auto;
    width: 100%;
    height: 30%;
  }

  h2 {
    margin-top: 20px;
  }
}
</style>