<template>
    <div id="tile"
        v-on:click="$emit('selectTile')"
        :class="{ black: black, selected: selected }">

        <span v-if="column == 'A'" class="row-title">{{ row }}</span>
        <span v-if="row == 1" class="column-title">{{ column }}</span>

    </div>
</template>


<script>
export default {
    name: 'Tile',
    props: ['column', 'row', 'black'],
    computed: {
        selected() {
            const currentTile = this.$store.getters.currentTile
            return currentTile && this.column === currentTile.column && this.row === currentTile.row
        }
    }

}
</script>


<style scoped>
#tile {
  width: 12.5%;
  height: 12.5%;
  position: relative;
}

.black {
  background-color: black;
  color: white;
}

.selected {
  box-shadow: inset 4px 4px limegreen, inset -4px -4px limegreen;
}

.row-title {
    margin: 4px 0px 0px 4px;
}

#tile .column-title {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 4px;
}
</style>