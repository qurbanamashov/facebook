import { createBrowserRouter } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },

  ]);
export default router