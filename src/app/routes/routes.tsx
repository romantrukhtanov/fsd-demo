import { createBrowserRouter } from 'react-router';

import { Layout } from '../layout';
import { HomePage } from '@/pages';
import { ROUTES } from '@/shared';

export const routes = createBrowserRouter([
  {
    path: ROUTES.home,
    Component: Layout,
    children: [
      {
        index: true, Component: HomePage,
      },
    ],
  }
]);
