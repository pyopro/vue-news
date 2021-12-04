import * as APIs from '../../api/index.js'

const state = {
    ask: []
};

const getters = {
    getAskList: (state) => {
        return state.ask;
    }
};

const mutations = {
    setAskList(state, ask) {
        state.ask = ask;
    }
};

const actions = {
    fetchAskList({ commit }) {
        APIs.fetchAskList()
            .then(({ data }) => commit('setAskList', data))
            .catch(error => console.log(error));
    }
};

export default {
	state,
	getters,
	mutations,
    actions
};