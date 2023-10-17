import { defineStore } from "pinia";
// import ref from "vue";

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,

    doublePlusOne( ) {
      return this.doubleCount * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
