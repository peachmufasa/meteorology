import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignInForm from "./components/SignInForm.jsx";
import {LayoutMenu} from "./components/LayoutMenu.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import {sections} from "./const/sections.jsx";

const sectionRoutes = Object.keys(sections).map((key) => ({
    path: `/section/${key}`,
    element: sections[key].sectionElement,
}));

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInForm />,
        // element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/section",
        element: <LayoutMenu />,
        children: sectionRoutes
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
