import Vue from 'vue';
// Vue router is its own package
import Router from 'vue-router';

import App from './views/Home.vue';
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';

Vue.use(Router);

export default new Router(
    {
        mode: 'history',

        // For small apps, all the routes can just be defined like this. For
        // larger ones, this can be broken up into separate files, or generated
        // dynamically
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },

            {
                path: '/page1',
                name: 'page1',
                component: Page1
            },

            // Page 1
            {
                path: '/page2',
                name: 'page2',
                component: Page2
            }
        ]
    }
);
