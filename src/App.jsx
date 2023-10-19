import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Components/Pages/Home/MainLayout";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components//Pages/Login/Login";
const CarRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]

  },
]);
export default CarRoutes
