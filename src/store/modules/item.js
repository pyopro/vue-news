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
    fetchItemInfo({ commit }, id) {
        APIs.fetchItemInfo(id)
            .then(({ data }) => commit('setItemInfo', data))
            .catch(error => console.log(error));
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};