import * as APIs from '../../api/index.js'

const state = {
    jobs: []
};

const getters = {
    getJobsList: (state) => {
        return state.jobs;
    }
};

const mutations = {
    setJobsList(state, jobs) {
        state.jobs = jobs;
    }
};

const actions = {
    fetchJobsList({ commit }) {
        APIs.fetchJobsList()
            .then(({ data }) => commit('setJobsList', data))
            .catch(error => console.log(error));
    }
};

export default {
	state,
	getters,
	mutations,
    actions
};