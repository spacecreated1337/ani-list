import {
  createStore
} from 'vuex';

export default createStore({
  state: {
    user: null
  },
  getters: {

  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({
      commit
    }, details) {

    },

    async register({
      commit
    }, details) {

    },

    async logout({
      commit
    }, details) {

    },
  },
  modules: {}
});