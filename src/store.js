import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  /* Acciones: procesos sincrónicos y asincrónicos */
  actions: {
    async getUsuarios({commit}) {
      try {
        const usuarios = await axios.get('https://60a5969fc0c1fd00175f40c0.mockapi.io/api/users');
        commit("setUsuarios", usuarios.data);
      } catch (error) {
        console.log(error);
      }
    },
    async crearUsuario({ commit }, payload) {
      try {
        const nuevoUsuario = await axios.post('https://60a5969fc0c1fd00175f40c0.mockapi.io/api/users', payload, {
          "content-type": "application/json",
        });
        commit("setNuevoUsuario", nuevoUsuario.data);

      } catch (error) {
        console.log(error);
      }
    },
  },
  /* Mutaciones: sólo procesos sincrónicos */
  mutations: {
    setNuevoUsuario(state, nuevoUsuario) {
      state.users = [...state.users, nuevoUsuario]
    },
    setUsuarios(state, usuarios) {
      state.users = usuarios
    }
  },
});
