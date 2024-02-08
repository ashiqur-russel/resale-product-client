import { createBrowserRouter } from "react-router-dom";
import FourZeroFour from "../components/ErrorPage/FourZeroFour";
import Welcome from "../components/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Checkout from "../Pages/Checkout/Checkout";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Error from "../Pages/Shared/DisplayError/Error";
import Signin from "../Pages/Shared/Signin/Signin";
import Signup from "../Pages/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_API_LOCAL_url}/advertiseditem/${params.id}`
          ),
      },

      {
        path: "/categories/:name",
        loader: ({ params }) => {
          return fetch(
            `${process.env.REACT_APP_API_LOCAL_url}/products/${params.name}`
          );
        },
        element: (
          <PrivateRoute>
            {" "}
            <Categories></Categories>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Welcome></Welcome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <PrivateRoute>
            <AllSellers></AllSellers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <PrivateRoute>
            <AllBuyers></AllBuyers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-reports",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-buyers",
        element: (
          <PrivateRoute>
            <MyBuyers></MyBuyers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_API_LOCAL_url}/bookings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <FourZeroFour />,
  },
]);

export default router;
