import * as APIs from '../../api/index.js'

const state = {
    user: {}
};

const getters = {
    getUserInfo: (state) => {
        return state.user;
    }
};

const mutations = {
    setUserInfo(state, user) {
        state.user = user;
    }
};

const actions = {
    fetchUserInfo({ commit }, userName) {
        APIs.fetchUserInfo(userName)
            .then(({ data }) => commit('setUserInfo', data))
            .catch(error => console.log(error));
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};