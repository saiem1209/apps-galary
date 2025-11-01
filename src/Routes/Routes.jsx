import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        hydrateFallbackElement: <p>loading....</p>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('./homeappsdata.json'),
            },
            {
                path: "/apps",
                element: <Apps />
            },
            {
                path: "/installation",
                element: <Installation />,
            },
            {
                path: "/apps/:id",
                element: <AppDetails />,
            },

        ]
    },


]);

export default router