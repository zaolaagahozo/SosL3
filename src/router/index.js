import {createRouter, createWebHistory} from  "vue-router";
import homeview from '../views/Home.vue';
import serviceview from '../views/service.vue';
import contactview from '../views/contact.vue';
import About from '../views/about.vue';
import Kigali from "../views/Kigali.vue";
import East from "../views/East.vue";
import North from "../views/North.vue";
import Photos from "../views/Photos.vue";

import South from "../views/South.vue";
import Western from "../views/Western.vue";
import Videos from "../views/Videos.vue";
 
const routes = [
    {
        path: '/',
        name: 'home',
        component: homeview,
    },


    {
        path: '/about',
        name: "about",
        component: About,
    },
    {
        path: '/services',
        name: 'services',
        component: serviceview
    },

    {
         path: '/contact',
        name: 'contact',
        component: contactview,
    },
    {
          path: '/Kigali',
        name: 'kigali',
        component: Kigali,
    },
    {
        path: '/East',
        name: 'East',
        component: East,
    },
    {
       path: '/North',
        name: 'North',
        component: North,
    },
    {
           path: '/South',
        name: 'South',
        component: South,
    },
    {
         path: '/Western',
        name: 'Western',
        component: Western,  
    },
    {
        path: '/Photos',
        name: 'Photos',
        component: Photos,
    },
    {
        path: '/Videos',
        name: 'Videos',
        component: Videos,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,

});
export default router;

