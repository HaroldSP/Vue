const goods = {
  state: {
    goods: [],
  },
  mutations: {
    setGoodsData(state, data) {
      console.log(data);
      state.goods = data;
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
    },
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};

export default goods;
