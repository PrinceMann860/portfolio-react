import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Projects from './components/Projects'
import Contact from './components/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <Navbar />
        <Services />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar />
        <Projects />
      </>
    ),
  },
  {
    path: "/resume",
    element: (
      <>
        <Navbar />
        <Resume />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },

]);

export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
