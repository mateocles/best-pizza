import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  Users: [],
  User: {},
  loading: { getUser: false },
};

const getters = {
  User: (state) => {
    return state.user;
  },
  Users: (state) => {
    return state.Users;
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
        commit("getUserResponse", { response });
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
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
};

const mutations = {
  loading(state, payload) {
    state.loading.getItems = payload;
  },
  getUserResponse(state, data) {
    state.Users = data.response.data.response.users;
  },
  setUser(state, data) {
    state.User = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
