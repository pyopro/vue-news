import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news.js'
import ask from './modules/ask.js'
import jobs from './modules/jobs.js'
import user from './modules/user.js'
import item from './modules/item.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules : {
		news,
        ask,
        jobs,
		user,
		item
	}
});