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
    async fetchUserInfo({ commit }, userName) {
        try {
            commit('setUserInfo', {});
            const { data } = await APIs.fetchUserInfo(userName);
            commit('setUserInfo', data);

            return data;
        } catch (error) {
            console.log(error);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};