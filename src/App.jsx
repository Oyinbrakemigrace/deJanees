import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layoutt/MainLayout";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ContactPage = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/our-services" element={<ServicesPage />} />
      <Route path="/our-projects" element={<ProjectsPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
