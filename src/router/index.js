import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EducationView from '../views/EducationView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import HobbiesView from '../views/HobbiesView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'homeview',
        component: HomeView,
    },
    {
        path: '/aboutme',
        redirect: '/',
    },
    {
        path: '/education',
        name: 'education',
        component: EducationView,
    },
    {
        path: '/experience',
        name: 'experience',
        component: ExperienceView,
    },
    {
        path: '/projects',
        redirect: '/experience',
    },
    {
        path: '/hobbies',
        name: 'hobbies',
        component: HobbiesView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;
