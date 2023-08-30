import { createStore } from 'vuex'

interface carDetails {
  maker: string,
  model: string,
  price: number,
  description: string,
  features: string,
  mileage: number
}

export default createStore({
  state: {
    searchInput: "" as string,
    carDetails: {} as carDetails,
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
