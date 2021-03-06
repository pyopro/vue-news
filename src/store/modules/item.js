import * as APIs from '../../api/index.js'

const state = {
    item: {}
};

const getters = {
    getItemInfo: (state) => {
        return state.item;
    }
};

const mutations = {
    setItemInfo(state, item) {
        state.item = item;
    }
};

const actions = {
    async fetchItemInfo({ commit }, id) {
        try {
            commit('setItemInfo', {});
            const { data } = await APIs.fetchItemInfo(id);
            commit('setItemInfo', data);

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