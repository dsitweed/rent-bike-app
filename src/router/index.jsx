import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/admin-layout";
import UserLayout from "../layouts/user-layout";
import BikePage from "../pages/user-pages/BikePage";
import Dashboard from "../pages/user-pages/Dashboard";
import FilterPage from "../pages/user-pages/FilterPage";
import SignIn from "../pages/auth/SignIn";
import OrderPage from "../pages/user-pages/OrderPage";
import HistoryPage from "../pages/user-pages/HistoryPage";
import OrderList from "../pages/admin-pages/OrderList";
import CreateBike from "../pages/admin-pages/CreatBike";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <FilterPage />,
      },
      {
        path: "bike/:id", // view one bike information
        // element: <Bike />,
      },
      {
        path: "order", // view + handle (create) 1 order bằng màn 6 + màn 8 trong tài liệu
        element: <OrderPage />,
      },
      {
        path: "history", // view all history of order
        element: <HistoryPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: 'order-list',
        element: <OrderList />,
      },
      {
        path: 'create-bike',
        element: <CreateBike />,
      }
    ],
  },
  {
    path: "/auth",
    element: <UserLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
      },
    ],
  },
]);

export default router;
