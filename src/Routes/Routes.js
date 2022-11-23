import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signin from "../Pages/Shared/Signin/Signin";
import Signup from "../Pages/Shared/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <div></div>,
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <div></div>,
    children: [
      {
        path: "/dashboard",
        element: (
          <div>
            <div />
          </div>
        ),
      },
    ],
  },
]);

export default router;
