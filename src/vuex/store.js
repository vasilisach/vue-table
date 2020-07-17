import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: [],
        selectedUser: {}
    },
    actions: {
        GET_USERS({ commit }) {
            let url = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
            
            return axios(url, {
                method: 'GET'
            })
            .then(response => {
                commit('SET_USERS_TO_VUEX', response.data)
            })
            .catch(error => {console.log(error)})
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        },
        SELECT_USER: (state, user) => {
            state.selectedUser = user
        }
    },
    getters: {
        USERS(state) {
            return state.users
        },
        SELECTED_USER(state) {
            return state.selectedUser
        }
    },
})

export default store