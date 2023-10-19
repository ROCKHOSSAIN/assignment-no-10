import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Components/Pages/Home/MainLayout";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components//Pages/Login/Login";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import MyCart from "./Components/Pages/MyCart/MyCart";
import PrivateRoute from "./Components/Provider/PrivateRoute";
import BrandDetails from "./Components/Pages/BrandDetails/BrandDetails";
const CarRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path:"/myCart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path: "/brandName/:brandName", 
        loader:()=>fetch('http://localhost:5000/allcar'),
        element: <BrandDetails></BrandDetails>
      }
    ]

  },
]);
export default CarRoutes
