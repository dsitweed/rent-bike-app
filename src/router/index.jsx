import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import AdminLayout from "../layouts/admin-layout";
import Dashboard from "../pages/user-pages/Dashboard";
import OrderList from "../pages/admin-pages/OrderList";

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'search',
        element: <Dashboard />,
      },
      {
        path: 'bike', // view one bike information
        element: <Dashboard />,
      },
      {
        path: 'order', // view + handle (create) 1 order bằng màn 6 + màn 8 trong tài liệu
        element: <Dashboard />,
      },
      {
        path: 'history', // view all history of order
        element: <Dashboard />,
      }
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'order-list',
        element: <OrderList />,
      }
    ],
  },
  {
    path: '/auth',
    element: <Dashboard />,
    children: [
      {
        path: 'signin'
      },
      {
        path: 'signup'
      }
    ]
  }
]);

export default router;