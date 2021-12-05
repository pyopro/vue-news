import * as APIs from '../../api/index.js'

const state = {
    list: []
};

const getters = {
    getList: (state) => {
        return state.list;
    }
};

const mutations = {
    setList(state, list) {
        state.list = list;
    }
};

const actions = {
    async fetchList({ commit }, resource) {
        try {
            commit('setList', []);
            const { data } = await APIs.fetchList(resource);
            commit('setList', data);

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