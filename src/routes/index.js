import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/news' },
    { path: '/news', component: NewsView, name: 'news' },
    { path: '/ask', component: AskView, name: 'ask' },
    { path: '/jobs', component: JobsView, name: 'jobs' },
    { path: '/user/:id', component: UserView },
    { path: '/item/:id', component: ItemView },
];

export const router = new VueRouter({
    mode: 'history',
    routes
})

