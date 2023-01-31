import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import ProductsPage from '../views/ProductsPage';

const routes =[
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsPage
    }
]

const routers = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default routers