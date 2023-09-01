import { createStore } from 'vuex';
import { PropType } from 'vue';

interface carDetails {
  item: { 
    id: number,
    make: string,
    model: string,
    price: number,
    description: string,
    features: string,
    mileage: number 
  };
}

export default createStore({
  state: {
    searchInput: "" as string,
    carDetails: Object as PropType<carDetails['item']>,
  },
  getters: {
  },
  mutations: {
    setSearchInput(state, data: string){
      state.searchInput = data;
    },
    setCarDetails(state, data: PropType<carDetails['item']>){
      state.carDetails = data;
    }
  },
  actions: {
  },
  modules: {
  }
});
