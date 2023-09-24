import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);