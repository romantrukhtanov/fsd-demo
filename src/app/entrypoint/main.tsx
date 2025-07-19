import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';

import '../styles/index.css';
import { routes } from '../routes';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
