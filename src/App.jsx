import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import PortfolioSection from "./components/Sections/PortfolioSection";
import AboutSection from "./components/Sections/AboutSection";
import HomeSection from "./components/Sections/HomeSection";
import ContactSection from "./components/Sections/ContactSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeSection />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "portfolio",
        element: <PortfolioSection />,
      },
      {
        path: "contact",
        element: <ContactSection />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
