import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  pizzaShops: [],
  loading: { getPizzaShops: false },
};

const getters = {
  pizzaShops: (state) => {
    return state.pizzaShops;
  },
  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  getPizzaShops({ commit }) {
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
    state.pizzaShops = data.response.data.response.stores;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
