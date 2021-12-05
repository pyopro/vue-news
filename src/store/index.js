import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import item from './modules/item.js'
import list from './modules/list.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules : {
		user,
		item,
		list
	}
});