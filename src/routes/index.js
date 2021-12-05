import Vue from 'vue'
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/news' },
    { 
        path: '/news', 
        component: createListView('news'), 
        name: 'news',
        beforeEnter: (to, from, next) => {
            // Router Guard
            // 대분분 여기서 인정정보 체크
            next();
        }
    },
    { 
        path: '/ask', 
        component: createListView('ask'), 
        name: 'ask' },
    { 
        path: '/jobs', 
        component: createListView('jobs'), 
        name: 'jobs' 
    },
    { 
        path: '/user/:id', 
        component: UserView 
    },
    { 
        path: '/item/:id', 
        component: ItemView 
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes
})

