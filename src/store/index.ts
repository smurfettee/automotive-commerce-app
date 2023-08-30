import { createStore } from 'vuex'

export default createStore({
  state: {
    searchInput: "" as string,
  },
  getters: {
  },
  mutations: {
    setSearchInput(state, data: string){
      state.searchInput = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
