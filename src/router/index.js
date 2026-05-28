import {createRouter, createWebHistory} from  "vue-router";
import homeview from "../views/Home.vue"
import aboutview from "../views/about.vue"
import serviceview from "../views/service.vue"
import contactview from "../views/contact.vue"
 
const routes = [
    {
        path: "/",
        name: "home",
        component: homeview,
    },


    {
        path: "/about",
        name: "about",
        component: aboutview,
    },
    {
        path: "/services",
        name: "services",
        component: serviceview,
    },

    {
         path: "/contact",
        name: "contact",
        component: contactview,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,

});
export default router;

