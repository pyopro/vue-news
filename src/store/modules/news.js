import * as APIs from '../../api/index.js'

const state = {
    news: []
};

const getters = {
    getNewsList: (state) => {
        return state.news;
    }
};

const mutations = {
    setNewsList(state, news) {
        state.news = news;
    }
};

const actions = {
    fetchNewsList({ commit }) {
        APIs.fetchNewsList()
            .then(({ data }) => commit('setNewsList', data))
            .catch(error => console.log(error));
    }
};

export default {
	state,
	getters,
	mutations,
    actions
};