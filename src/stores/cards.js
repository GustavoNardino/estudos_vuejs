import { defineStore } from 'pinia'

export const useDeckStore = defineStore("deck", {
  state: () => {
    return {
      deck: []
    };
  },
  actions: {
    increment(item) {
      this.deck.push(item)
    }
  }
}

)