import { createStore } from 'vuex';
import axios from 'axios';
import Cookies from 'js-cookie';

const store = createStore({
  state: {
    user: null,
    tasks: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async login({ commit }, credentials) {

        const response = await axios.post('/auth/login', credentials);
        commit('setUser', response.data.user);
        Cookies.set('token', response.data.token, { expires: 7 }); // Token expires in 7 days
        axios.defaults.headers.common['x-auth-token'] = response.data.token;
        console.log(response)
    },
    async fetchTasks({ commit }) {
      const response = await axios.get('/tasks');
      commit('setTasks', response.data);
    },
    async signup({ commit }, userData) {
      const response = await axios.post('/auth/register', userData);
      commit('setUser', response.data);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    tasks: state => state.tasks
  }
});

export default store;
