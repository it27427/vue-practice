import {createWebHistory, createRouter} from 'vue-router';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import PageNotFound from './Components/PageNotFound';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;