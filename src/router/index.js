import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import ProductsPage from '../views/ProductsPage';
import PastOrdersPage from '../views/PastOrdersPage';

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
    },
    {
        path: '/past-orders',
        name: 'Past-Orders',
        component: PastOrdersPage
    }
]

const routers = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default routers