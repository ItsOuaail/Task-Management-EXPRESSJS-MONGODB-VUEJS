import { createStore } from 'vuex';
import axios from 'axios';

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
      commit('setUser', response.data);
    },
    async fetchTasks({ commit }) {
      const response = await axios.get('/tasks');
      commit('setTasks', response.data);
    },
    async signup({ commit }, userData) {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      commit('setUser', response.data);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    tasks: state => state.tasks
  }
});

export default store;
