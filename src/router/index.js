import { createRouter, createWebHashHistory } from 'vue-router'

//views
import RegistroView from '@/views/inicioRegistro.vue'
import CrudUsersView from '@/views/crudUsers.vue'
import AgregarUserView from '@/views/agregarUser.vue'
import EditarUserView from '@/views/editarUser.vue'

const routes = [{
        path: '/',
        name: 'InicioRegistroView',
        component: RegistroView
    },
    {
        path: '/crudUsers',
        name: 'CrudUsersView',
        component: CrudUsersView
    },
    {
        path: '/agregarUser',
        name: 'AgregarUser',
        component: AgregarUserView
    },
    {
        path: '/editarUser/users/:id',
        name: 'EditarUser',
        component: EditarUserView
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router;

// const routes = [
//     { path: '/inicio', component: { template: '<div>inicio</div>' } },
//     { path: '/crudUsers', component: { template: '<div>crudUSers</div>' } }
// ];
// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes,
// });
// const app = Vue.createApp({});
// app.use(router);
// app.mount('#app');

// import axios from "axios";
// function listar(){

//     axios
//     .get('http://127.0.0.1:3333/app/users')

//     .then(response => {
//     console.log(response);
//     })

// }

// axios
//     .post('http://127.0.0.1:3333/app/create')

// .then(response => {
//     console.log(response)
// })

// axios
//     .patch('http://127.0.0.1:3333/app/update/:id', { data: { id: 0, body: '' } })

// .then(response => {
//     console.log(response)
// })

// axios
//     .delete('http://127.0.0.1:3333/app/delete/:id', { id: 0 })

// .then(response => {
//     console.log(response)
// })