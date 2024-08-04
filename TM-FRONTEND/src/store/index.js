import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";


const store = createStore({
  state: {
    user: null,
    tasks: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task._id !== taskId);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task._id === updatedTask._id);
      if (index !== -1) {
          state.tasks.splice(index, 1, updatedTask);
      }
  }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post("/auth/login", credentials);
      commit("setUser", response.data.user);
      Cookies.set("token", response.data.token, { expires: 7 }); // Token expires in 7 days
      axios.defaults.headers.common["x-auth-token"] = response.data.token;
      console.log(response);
    },
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get("/tasks");
        commit("setTasks", response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    },

    async addTask ({commit}, taskData) {
      try {
        const response = await axios.post("/tasks", taskData);
        commit('ADD_TASK', response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Failed to add task", error);
      }
    },

    async editTask({ commit }, task) {
      const response = await axios.put(`/tasks/${task._id}`, task);
      console.log(response.data);
      commit('updateTask', response.data);
  },

    async deleteTask ({commit}, taskId) {
      try {
        const response = await axios.delete(`/tasks/${taskId}`);
        commit('DELETE_TASK', taskId);
        console.log(response)
      } catch (error) {
        console.error("Failed to delete task", error);
      }
    },
    async signup({ commit }, userData) {
      const response = await axios.post("/auth/register", userData);
      commit("setUser", response.data);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    tasks: (state) => state.tasks,
  },
});

export default store;
