import { createRoot } from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { StrictMode } from 'react';
import Main from './Main';
import About from './About';

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Main />},
    {path: 'about', element: <About />},
  ]}
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);