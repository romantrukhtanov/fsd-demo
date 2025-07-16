import { createBrowserRouter } from 'react-router';

import { Layout } from '../layout';
import { HomePage } from '../../pages';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true, Component: HomePage,
      },
    ],
  }
]);
