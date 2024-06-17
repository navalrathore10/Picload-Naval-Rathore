import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ContactMe from './pages/ContactMe';
import { ToggleProvider } from './ToggleContext';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';


export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'gallery',
          element: <Gallery />,
        },
        {
          path: 'contactme',
          element: <ContactMe />,
        }
      ],
    }
  ]);


  return (
    <ToggleProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ToggleProvider>
  );
}