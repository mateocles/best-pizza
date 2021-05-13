import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  PizzaShops: [],
  loading: { getPizzaShops: false },
};

const getters = {
  PizzaShops: (state) => {
    return state.productsCart;
  },
  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  getUsers({ commit }) {
    commit("loading", true);
    Api.get(
      `/RH.json`,
      async (functions) => {
        const response = await functions;
        commit("loading", false);
        commit("getPizzaShopsResponse", { response });
      },
      async (functions) => {
        const response = await functions;
        commit("loading", false);
        setMessage(
          "Error",
          `Ha sucedido un error en la transacción ${response}`,
          "error"
        );
      }
    );
  },
};

const mutations = {
  loading(state, payload) {
    state.loading.getItems = payload;
  },
  getPizzaShopsResponse(state, data) {
    state.User = data.response.data.results;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
