import CheckoutPage from "../Pages/Checkout";
import Home from "../Pages/Home";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/checkout',
        exact: true,
        component: CheckoutPage
    },
];

export default routes;