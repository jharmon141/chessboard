import Vue from 'vue'
import { expect } from 'chai'
import Board from '@/components/Board'
import store from '@/store.js'

describe('Board.vue', () => {
  const Constructor = Vue.extend(Board)
  const vm = new Constructor({ store }).$mount()

  it('adds Tile to store when selected', () => {
    const tileToAdd = { row: 'C', column: 6 }
    vm.handleSelectTile(tileToAdd)

    expect(vm.$store.state.selectedTiles.length).to.equal(1)
    expect(vm.$store.getters.currentTile.column).to.equal(tileToAdd.column)
    expect(vm.$store.getters.currentTile.row).to.equal(tileToAdd.row)
  })

  it('it does not add tile if already selected', () => {
    const tileToAdd = { row: 'D', column: 8 }
    vm.handleSelectTile(tileToAdd)

    //adds new tile successfully
    expect(vm.$store.state.selectedTiles.length).to.equal(2)
    expect(vm.$store.getters.currentTile.column).to.equal(tileToAdd.column)
    expect(vm.$store.getters.currentTile.row).to.equal(tileToAdd.row)

    //does not add currently selected tile
    vm.handleSelectTile(tileToAdd)
    expect(vm.$store.state.selectedTiles.length).to.equal(2)
    expect(vm.$store.getters.currentTile.column).to.equal(tileToAdd.column)
    expect(vm.$store.getters.currentTile.row).to.equal(tileToAdd.row)
  })
})
