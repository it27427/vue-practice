import {createWebHistory, createRouter} from 'vue-router';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Contact from './Components/Contact';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;