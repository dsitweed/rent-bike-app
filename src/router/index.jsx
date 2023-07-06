import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import AdminLayout from "../layouts/admin-layout";
import Dashboard from "../pages/user-pages/Dashboard";

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