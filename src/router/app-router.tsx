import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import CreateLayout from '../layout/CreateLayout/CreateLayout';
import MainLayout from '../layout/MainLayout/MainLayout';
import Create from '../pages/Create/Create';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/detail/:_id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/create',
    element: <CreateLayout />,
    children: [
      {
        path: '',
        element: <Create />,
      },
    ],
  },
]);
