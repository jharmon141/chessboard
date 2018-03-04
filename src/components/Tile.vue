<template>
    <div id="tile"
        v-on:click="$emit('selectTile')"
        :class="{ black: black, selected: selected }">

        <span v-if="column == 'A'" id="row-title">{{ row }}</span>
        <span v-if="row == 1" id="column-title">{{ column }}</span>
    </div>
</template>


<script>

export default {
    name: 'Tile',
    props: ['column', 'row', 'black'],
    computed: {
        selected() {
            return this.$store.getters.currentTile && this.column === this.$store.getters.currentTile.column && this.row === this.$store.getters.currentTile.row
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

#tile #column-title {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>
