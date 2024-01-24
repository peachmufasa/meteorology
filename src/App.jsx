import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import SignInForm from "./sections/SignInForm.jsx";
import ErrorPage from "./sections/ErrorPage.jsx";
import {LayoutMenu} from "./layout/LayoutMenu.jsx";

import {sections} from "./const/sections.jsx";
import {adminSections} from "./const/sections.jsx";

function App() {
    let combinedSections = Object.assign({}, sections, adminSections)

    const sectionRoutes = Object.keys(combinedSections).map((key) => ({
        path: `/section/${key}`,
        element: combinedSections[key].sectionElement,
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

  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
