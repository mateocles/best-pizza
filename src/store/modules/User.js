import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  User: [],
  loading: { getUser: false },
};

const getters = {
  User: (state) => {
    return state.User;
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
        commit("getUsersResponse", { response });
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
  getUserResponse(state, data) {
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
