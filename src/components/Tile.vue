<template>
    <div id="tile"
        v-on:click="$emit('selectTile')"
        :class="{ black: black, selected: selected }">
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
}

.black {
  background-color: black;
}

.selected {
  box-shadow: inset 4px 4px limegreen, inset -4px -4px limegreen;
}
</style>
