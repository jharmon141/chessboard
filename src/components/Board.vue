<template>
    <div id="board">

        <Tile v-for="(tile, index) in tiles"
            v-on:selectTile="handleSelectTile(tile)"
            :column="tile.column"
            :row="tile.row"
            :black="tile.black"
            :key="index" />

    </div>
</template>


<script>
import Tile from './Tile.vue'

export default {
    name: 'Board',
    components: {
        Tile
    },

    data: () => ({
        tiles: []
    }),

    created() {
        let currentRow = 8
        let currentColumn = 'A'
        let tileIsBlack = false

        for (let i = 0; i < 64; i++) {
            let tile = {
                row: currentRow,
                column: currentColumn,
                black: tileIsBlack
            }

            this.tiles.push(tile)

            if (currentColumn === 'H') {
                currentRow -= 1
                currentColumn = 'A'
            }
            else {
                currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1)
                tileIsBlack = !tileIsBlack
            }
        }

    },

    methods: {
        handleSelectTile(tile) {
            const selectedTile = {
                column: tile.column,
                row: tile.row
            }

            const currentlySelectedTile = this.$store.getters.currentTile

            if (!currentlySelectedTile || selectedTile.row !== currentlySelectedTile.row || selectedTile.column !== currentlySelectedTile.column) {
                this.$store.dispatch('handleAddSelectedTile', selectedTile)
            }
        }
    }

}
</script>


<style scoped>
#board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 650px;
  height: 650px;
  border: 1px solid black;
  margin: auto;
  margin-top: 5%;
}
</style>
