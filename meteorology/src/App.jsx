import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import SignInForm from "./components/SignInForm.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import {LayoutMenu} from "./components/LayoutMenu.jsx";

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

function App() {
  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
