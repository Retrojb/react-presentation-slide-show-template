import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import "primereact/resources/themes/arya-purple/theme.css";
import 'primeflex/primeflex.css';
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import IntroPage from "./pages/IntroPage";
import SlidesNavigation from "./components/Slides/SlidesNavigation";
import AboutMe from "./pages/AboutMe";
import PageOne from "./pages/PageOne";
import ErrorPage from "./pages/Error";
import Slides from "./components/Slides/Slides";
import ContactMe from "./pages/ContactMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/intro",
                element: <IntroPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "/aboutme",
                element: <AboutMe />,
                errorElement: <ErrorPage />
            },
            {
                path: "/slides",
                element: <Slides />,
                errorElement: <ErrorPage />
            },
            {
                path: "/contactme",
                element: <ContactMe />,
                errorElement: <ErrorPage />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
