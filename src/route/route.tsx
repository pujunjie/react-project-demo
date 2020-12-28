import React from 'react';
import { RouteConfig } from 'react-router-config';

const Todo = React.lazy(() => import('../components/web/pages/todo/Todo'));

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Todo,
    exact: true,
  },
];

export default routes;
