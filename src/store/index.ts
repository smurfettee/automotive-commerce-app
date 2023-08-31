import { createStore } from 'vuex'

interface carDetails {
  make: string,
  model: string,
  price: number,
  description: string,
  features: string,
  mileage: number
}

export default createStore({
  state: {
    searchInput: "" as string,
    carDetails: {} as carDetails, // I dont know if this is the right way of declaring (ask)
  },
  getters: {
  },
  mutations: {
    setSearchInput(state, data: string){
      state.searchInput = data;
    },
    setCarDetails(state, data: carDetails){
      state.carDetails = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
