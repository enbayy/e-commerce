import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../pages/contactPage/page";
import HomePage from "../pages/homePage/page";
import App from "../App";
import FavoritePage from "../pages/favoritePage/page";
import LoginPage from "../pages/loginpage/page";
import RegisterPage from "../pages/registerPage/page";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/favoritePage',
                element: <FavoritePage />,
            },
            {
                path: '/contactPage',
                element: <ContactPage />,
            },
            {
                path: '/loginPage',
                element: <LoginPage />,
            },
            {
                path: '/registerPage',
                element: <RegisterPage />,
            },
        ],
    },
]);

export default routes;